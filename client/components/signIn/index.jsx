import React, { useEffect, useState } from "react";

const SignIn = ({ signIn }) => {
  // console.log(signIn);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (ev) => {
    if (ev.target.name === "username") setUsername(ev.target.value);
    if (ev.target.name === "password") setPassword(ev.target.value);
  };
  const onSubmit = (ev) => {
    ev.preventDefault();
    // signIn({ username, password });
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
