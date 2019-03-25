import React from "react";
import axios from "axios";

import { GoogleAuth } from "../../components/auth";

const Home = () => {
  const cookie = () => {
    axios.get("/auth/sessions").then(res => console.log(res));
  };

  return (
    <>
      <GoogleAuth />
      <button onClick={cookie}>Cookie</button>
    </>
  );
};

export default Home;
