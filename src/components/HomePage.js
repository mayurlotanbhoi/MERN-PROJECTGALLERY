import React, { useState, useEffect, useContext, lazy, Suspense } from "react";
// import ProjectCard from "./ProjectCard";
import { Revderer } from "../App";
import FetchData from "./FetchFunction";
import {
  Divider,
  IconButton,
  InputBase,
  Paper,
  TableSortLabel,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FetchFunck from "./FetchFunction";

const ProjectCard = lazy(() => import("./ProjectCard"));

const HomePage = () => {
  const [fetchedData, setFetchedData] = useState({});
  const { Refreshe, setRefreshe } = useContext(Revderer);
  const [filtered, setfiltered] = useState({});
  const [total, settotal] = useState(1);
  const [pages, setpages] = useState(0);

  const [refTotal, setRefTotal] = useState(0);

  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const project = await FetchData(
        "https://projectgallery-api.onrender.com/user/allProject/" + pages
      );
      setFetchedData(project.allProject);
      setfiltered(project.allProject);

      settotal(project.total);
      setRefTotal(project.total);
    };

    fetch();
  }, [Refreshe, pages]);

  

  const ProjectSort = async () => {
    console.log(email);

    if (email) {
      const project = await FetchData(
        "https://projectgallery-api.onrender.com/user/serchProject/" + email
      );
      setFetchedData(project.allProject);
      settotal(project.total);

      console.log(project);
    } else {
      setFetchedData(filtered);
      settotal(refTotal);
    }
  };

  return (
    // .hasOwnProperty("Avatar")
    <>
      <div style={{ marginTop: "50px" }}>
        <div>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Project B Email"
              inputProps={{ "aria-label": "search google maps" }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
              // onClick={(e) => ProjectSort(e)}
              // mongodb+srv://mayur:<password>@cluster0.hojr3ql.mongodb.net/?retryWrites=true&w=majority
            >
              <SearchIcon onClick={() => ProjectSort()} />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          </Paper>
        </div>

        {fetchedData.length > 0 ? (
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
              projects={fetchedData}
              totalPage={total}
              pages={pages}
              setpages={setpages}
            />
          </Suspense>
        ) : (
          <Typography variant="h1">LOADING</Typography>
        )}
      </div>
    </>
  );
};

export default HomePage;
