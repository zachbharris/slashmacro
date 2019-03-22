import React from "react";

const Home = () => {
  return (
    <a href={`${process.env.REACT_APP_PROXY}/auth/google`}>Login with Google</a>
  );
};

export default Home;
