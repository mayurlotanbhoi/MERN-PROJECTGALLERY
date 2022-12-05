import { TextField, Box, Stack, Paper, Button, Avatar } from "@mui/material";
import React, { useState } from "react";

import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";

const Registation = () => {
  const [file, setFile] = useState(null);
  // const [Statuse, setStatuse] = useState(null);

  const navigation = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    const formdata = new FormData();

    formdata.append("myfile", file);
    formdata.append("name", e.target.name.value);
    formdata.append("email", e.target.email.value);
    formdata.append("password", e.target.password.value);
    formdata.append("experiance", e.target.Expriance.value);
    formdata.append("feild", e.target.Field.value);
    formdata.append("education", e.target.Education.value);

    formdata.append("Stack", e.target.Tech.value);
    formdata.append("Comp", e.target.Comp.value);
    formdata.append("Post", e.target.Post.value);
    formdata.append("About", e.target.About.value);
    formdata.append("Mob", e.target.Mob.value);

    const res = await fetch("https://mern-projectgallery-server-mclu8c50o-mayurlotanbhoi.vercel.app/user/register", {
      method: "post",
      body: JSON.stringify(formdata) ,
    });

    const data = await res.json();
    window.alert(data.massege);

    if (res.status === 201) navigation("/login");
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", height: "90vh" }}>
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
              "https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?w=210&h=210&c=7&r=0&o=5&dpr=1.25&pid=1.7"
            }
          ></Avatar>
          <form onSubmit={submit} enctype="mulTipart/form-data" method="POST">
            <Stack direction="row" flexWrap="wrap" gap="20px">
              <TextField
                variant="outlined"
                label="Name.."
                type="text"
                name="name"
                autoFocus={true}
                required
              />

              <TextField
                variant="outlined"
                label="Email.."
                type="email"
                name="email"
                required
              />
              <TextField
                variant="outlined"
                label="Mob.."
                type="number"
                name="Mob"
                // autoFocus={true}
                maxLength={10}
                minLength={10}
                required
              />
              <TextField
                variant="outlined"
                label="Expriance-year.."
                type="number"
                name="Expriance"
                // autoFocus={true}
                required
              />
              <TextField
                variant="outlined"
                label="Field.."
                type="text"
                name="Field"
                // autoFocus={true}
                required
              />

              <TextField
                variant="outlined"
                label="Education.."
                type="text"
                name="Education"
                // autoFocus={true}
                required
              />

              <TextField
                variant="outlined"
                type="password"
                label="password.."
                name="password"
                required
              />

              <TextField
                variant="outlined"
                type="text"
                label="About-Me.."
                name="About"
                required
              />

              <TextField
                variant="outlined"
                type="text"
                label="Tech-Stack.."
                name="Tech"
                required
              />

              <TextField
                variant="outlined"
                type="text"
                label="Current-Comp.."
                name="Comp"
                required
              />
              <TextField
                variant="outlined"
                type="text"
                label="Current-Post.."
                name="Post"
                required
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
              <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                Submit
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>
    </>
  );
};

export default Registation;
