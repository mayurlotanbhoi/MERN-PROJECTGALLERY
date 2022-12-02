import {
  TextField,
  Box,
  Stack,
  Paper,
  Button,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import SendIcon from "@mui/icons-material/Send";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigation = useNavigate();
  const [error, setError] = useState(false);

  const loginHandler = (e) => {
    e.preventDefault();
    const loginData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    fetch("https://projectgallery-api.onrender.com/user/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 401) {
          setError(true);
          // return response.json();
        }
        return response.json();
      })
      .then((data) => {
        window.alert(data.massege);

        navigation("/");
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Box
        sx={{
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={10}
          sx={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LockOpenIcon
            sx={{ width: "100px", height: "100px", marginBottom: "20px" }}
          />
          {error ? (
            <Typography component={"span"} sx={{ color: "red" }}>
              Invalid Email or Password
            </Typography>
          ) : (
            ""
          )}
          <form onSubmit={(e) => loginHandler(e)}>
            <Stack gap="20px">
              <TextField
                variant="outlined"
                label="Email.."
                type="email"
                name="email"
                autoFocus={true}
                onChange={(e) => setError(false)}
                error={error}
              />
              <TextField
                variant="outlined"
                label="Password.."
                name="password"
                type="password"
                error={error}
                onChange={(e) => setError(false)}
              />
              <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                {" "}
                Submit
              </Button>
            </Stack>
          </form>
        </Paper>
      </Box>
    </>
  );
};

export default Login;
