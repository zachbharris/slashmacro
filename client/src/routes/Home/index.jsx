import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const logout = () => {
    axios
      .get("/auth/logout")
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const [macro, setMacro] = useState({
    title: "",
    description: "",
    content: ""
  });

  const handleMacroChange = e => {
    const { name, value } = e.target;
    setMacro({ ...macro, [name]: value });
  };

  const submitMacro = e => {
    e.preventDefault();

    axios
      .post("/api/macros", macro)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const getUserMacros = () => {
    axios
      .get("/user/macros")
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <>
      <a href="http://localhost:8000/auth/google">Google Login Link</a>
      <button onClick={logout}>logout</button>

      <form onSubmit={submitMacro}>
        <label>Title</label>
        <input type="text" name="title" onChange={handleMacroChange} />
        <label>Description</label>
        <input type="text" name="description" onChange={handleMacroChange} />
        <label>Macro</label>
        <textarea name="content" onChange={handleMacroChange} />
        <button type="submit">Submit</button>
      </form>

      <button type="button" onClick={getUserMacros}>
        Get User Macros
      </button>
    </>
  );
};

export default Home;
