import { Box, Stack, Paper, Avatar, Typography } from "@mui/material";
import React from "react";

import { useSelector } from "react-redux";

const AboutMe = () => {
  const { About } = useSelector((state) => state.user);

  console.log(About);
  return (
    <>
      {Object.keys(About).length > 0 ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",

            height: "100%",
            mt: "70px",
          }}
        >
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
                // mb: "50px",
              }}
              src={
                About.userdata?.Avatar
                  ? `https://projectgallery-api.onrender.com/${About.userdata.Avatar}`
                  : "https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?w=210&h=210&c=7&r=0&o=5&dpr=1.25&pid=1.7"
              }
            ></Avatar>
            <Stack
              sx={{
                display: "flex",
                justifyContent: { sm: "center", md: "space-between" },

                width: "100%",
                height: "100%",
                flexDirection: { sm: "column", md: "row" },
                // flexDirection: "column",
              }}
            >
              <Box sx={{ height: "100%", maxWidth: 300 }}>
                <Typography>
                  NAME: {About.userdata?.name.toUpperCase()}
                </Typography>
                <Typography>EMAIL: {About.userdata?.email}</Typography>
                <Typography>CONTACT NO: {About.userdata?.Mob}</Typography>
              </Box>

              <Box sx={{ height: "100%", maxWidth: 300 }}>
                <Typography>
                  CORE BRANCH: {About.userdata?.feild.toUpperCase()}
                </Typography>
                <Typography>
                  CURRENT COMP: {About.userdata?.Comp.toUpperCase()}
                </Typography>
                <Typography>
                  YEAR-EXPRERIANC: {About.userdata?.experiance}
                </Typography>
                <Typography>
                  POSITION: {About.userdata?.Post.toUpperCase()}
                </Typography>
                <Typography>
                  EDUCATION: {About.userdata?.education.toUpperCase()}
                </Typography>

                <Typography>
                  TECHNOLOGY: {About.userdata?.Stack.toUpperCase()}
                </Typography>
              </Box>
            </Stack>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "inhiret",
                margin: "20px",
                flexDirection: "column",
              }}
            >
              <Typography>ABOUT ME</Typography>

              <Typography>{About.userdata.About}</Typography>
              <Typography>ABOUT PROJECT</Typography>
              <Typography>{About.Description}</Typography>
            </Box>
          </Paper>
        </Box>
      ) : (
        <Typography>LOAGING</Typography>
      )}
    </>
  );
};

export default AboutMe;
