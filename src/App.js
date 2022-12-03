import { Route, Routes } from "react-router-dom";

import "./App.css";
import React, { createContext, useEffect, useState } from "react";

import {
  NavBar,
  Home,
  Login,
  Registation,
  Myproject,
  ABoutME,
} from "./components/index";

import { useSelector, useDispatch } from "react-redux";

import { fetchUser } from "./Redux/Slicers/GetUserSlicer";

export const Revderer = createContext();

function App() {
  const { access } = useSelector((state) => state.user);

  const dispatch = useDispatch({});

  const [Refreshe, setRefreshe] = useState(false);

  useEffect(() => {
    dispatch(fetchUser());
  }, [access]);

  return (
    <Revderer.Provider value={{ Refreshe: Refreshe, setRefreshe: setRefreshe }}>
      <div className="App">
        <NavBar />
        <div className="container">
          <Routes history={browserHistory}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/registation" element={<Registation />}></Route>

            <Route path="/MY-PROJECT" element={<Myproject />}></Route>
            <Route path="/useprofile" element={<ABoutME />}></Route>
          </Routes>
        </div>
      </div>
    </Revderer.Provider>
  );
}

export default App;
