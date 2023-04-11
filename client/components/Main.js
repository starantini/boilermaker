import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AllUsers from "./allUsers";
import SignIn from "./signIn";

const Main = () => {
  return (
    <div>
      <nav>
        <Link to={"/"}>HOME</Link>
        <Link to={"/users"}>Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/users" element={<AllUsers />}></Route>
      </Routes>
    </div>
  );
};

export default Main;
