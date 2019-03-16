import React from "react";
import axios from "axios";

const Home = () => {
  const authGoogle = () => {
    axios
      .get("/auth/google")
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  return <button onClick={authGoogle}>Login with Google</button>;
};

export default Home;
