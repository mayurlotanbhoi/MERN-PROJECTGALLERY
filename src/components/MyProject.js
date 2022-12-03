import React, { useEffect, useState, useContext, lazy, Suspense } from "react";
// import ProjectCard from "./ProjectCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Revderer } from "../App";
import FetchData from "./FetchFunction";
import { Box, Typography } from "@mui/material";

const ProjectCard = lazy(() => import("./ProjectCard"));

// import useFetch from "./useFetch";

const MyProject = () => {
  const navigate = useNavigate();
  const { data, access } = useSelector((state) => state.user);

  const [fetchedData, setFetchedData] = useState({});

  const { Refreshe } = useContext(Revderer);

  useEffect(() => {
    const fetch = async () => {
      const project = await FetchData("https://projectgallery-api.onrender.com/user/mayProject");

      // console.log(project);

      setFetchedData(project);
    };

    fetch();

    // console.log(fetchedData);
  }, [Refreshe]);

  

  const { Avatar, email, projectDetails } = fetchedData || {};

  useEffect(() => {

    const checkLogin = () => {

      if (Object.keys(data).length < 1) {
        window.alert("To ACCES THIS PAGE YOU NEED TO LOGIN FIRST");
        navigate("/login");
      }
    };
    checkLogin();

  }, [access]);

  return (
    <>
      <Box
        sx={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
          mt: "200px",
        }}
      >
        {Avatar ? (
          <Suspense
            fallback={
              <Typography
                variant="h1"
                sx={{ height: "80vh", display: "flex", alignItems: "center" }}
              >
                LOADING...
              </Typography>
            }
          >
            <ProjectCard
              Avatars={Avatar}
              email={email}
              projects={projectDetails}
            />
          </Suspense>
        ) : (
          <Typography>PLEASE ADD YOU PROJECT</Typography>
        )}
      </Box>
    </>
  );
};

export default MyProject;
