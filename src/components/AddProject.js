import {
  TextField,
  Box,
  Stack,
  Paper,
  Button,
  Avatar,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  DialogContent,
  TextareaAutosize,
} from "@mui/material";
import React, { useState, useContext } from "react";

import SendIcon from "@mui/icons-material/Send";

import { useSelector } from "react-redux";
import { Revderer } from "../App";
const AddPeoject = ({ open, setOpen }) => {
  const [file, setFile] = useState(null);
  // const [Statuse, setStatuse] = useState(null);
  const { data } = useSelector((state) => state.user);

  const { Refreshe, setRefreshe } = useContext(Revderer);

  // console.log(Refresher, setRender);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const submit = async (e) => {
    e.preventDefault();

    const formdata = new FormData();

    formdata.append("myfile", file);
    formdata.append("titel", e.target.titel.value);
    formdata.append("email", e.target.email.value);
    formdata.append("Startdate", e.target.Sdate.value);
    formdata.append("Enddate", e.target.Edate.value);
    formdata.append("Github", e.target.Git.value);
    formdata.append("Projectlink", e.target.Plink.value);
    formdata.append("Description", e.target.discre.value);
    formdata.append("Stack", e.target.Stack.value);

    const res = await fetch("https://mern-projectgallery-server-mclu8c50o-mayurlotanbhoi.vercel.app/user/projectadd", {
      method: "POST",
      body: formdata,
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setRefreshe(!Refreshe);
    handleClose();
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Project</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>

          <Box>
            <Paper
              elevation={10}
              sx={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "80vw",
              }}
            >
              <Avatar
                alt="Memy Sharp"
                sx={{
                  width: { sm: "10vw", xs: 100 },
                  height: { sm: "20vh", xs: 100 },
                  mb: "50px",
                }}
                src={
                  data?.Avatar
                    ? "https://mern-projectgallery-server-mclu8c50o-mayurlotanbhoi.vercel.app/" + data.Avatar
                    : "https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?w=210&h=210&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                }
              ></Avatar>
              
              <form
                onSubmit={submit}
                encType="mulTipart/form-data"
                method="POST"
              >
                <Stack direction="row" flexWrap="wrap" gap="20px">
                  <TextField
                    variant="outlined"
                    label="email.."
                    type="email"
                    name="email"
                    value={data.email}
                    autoFocus={true}
                    required
                  />
                  <TextField
                    variant="outlined"
                    label="ProjectTilet.."
                    type="text"
                    name="titel"
                    autoFocus={true}
                    required
                  />

                  <TextField
                    required
                    id="outlined-required"
                    label="Start date"
                    type="text"
                    name="Sdate"
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="end date"
                    type="text"
                    name="Edate"
                  />

                  <TextField
                    variant="outlined"
                    label="Stack.."
                    type="text"
                    name="Stack"
                    // autoFocus={true}
                    required
                  />

                  <TextField
                    variant="outlined"
                    type="link"
                    label="Github Link.."
                    name="Git"
                    inputProps={{
                      pattern: "https://github.com/?.+",
                      title: "Include https://github.com/",
                    }}
                    required
                  />
                  <TextField
                    variant="outlined"
                    type="link"
                    label="Project Link.."
                    name="Plink"
                    inputProps={{
                      pattern: "https?://.+",
                      title: "Include http://",
                    }}
                    required
                  />
                  <TextareaAutosize
                    aria-label="sminimum height"
                    minRows={3}
                    // maxLength={120}
                    minLength={50}
                    placeholder="Project Description"
                    type="text"
                    label="Project Link.."
                    name="discre"
                    required
                    style={{ maxWidth: "450px", minWidth: "200px" }}
                  />

                  <TextField
                    variant="outlined"
                    type="file"
                    name="myfile"
                    onChange={(e) => setFile(e.target.files[0])}
                    required
                  />
                </Stack>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "inhiret",
                    margin: "20px",
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<SendIcon />}
                  >
                    Submit
                  </Button>
                </Box>
              </form>
            </Paper>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddPeoject;
