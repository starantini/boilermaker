import React, { useEffect, useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState({});

  useEffect(() => {
    attemptTokenLogin();
  }, []);

  const onChange = (ev) => {
    if (ev.target.name === "username") setUsername(ev.target.value);
    if (ev.target.name === "password") setPassword(ev.target.value);
  };
  const onSubmit = (ev) => {
    ev.preventDefault();
    signIn({ username, password });
  };
  const signIn = async (credentials) => {
    //credentials is username and password
    console.log(credentials);
    const response = await axios.post("/auth", credentials);
    console.log(response);
    //response.data has the token within,
    //it is destructured from data below
    const { token } = response.data;
    console.log(token);
    //localStorage is set with the token
    window.localStorage.setItem("token", token);
    //calls the attemtTokenLogin on line 47
    attemptTokenLogin();
  };
  const attemptTokenLogin = async () => {
    //grabs token from localStorage
    const token = window.localStorage.getItem("token");
    //if it exists
    // console.log(token);
    if (token) {
      //what is the syntax doing below
      const { data: auth } = await axios.get("/auth", {
        headers: {
          authorization: token,
        },
      });
      // console.log(data);
      //calls setAuth with the auth from database to the useState
      setAuth(auth);
      const { data } = await axios.get(`/api/users/${auth.id}/notes`, {
        headers: {
          authorization: token,
        },
      });
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <input value={username} onChange={onChange} name="username" />
      <input value={password} onChange={onChange} name="password" />
      <button>Sign In</button>
    </form>
  );
};

export default SignIn;
