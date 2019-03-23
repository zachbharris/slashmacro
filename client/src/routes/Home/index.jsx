import React from "react";

const Home = () => {
  const googleLogin = () => {
    fetch("/auth/google", {
      method: "GET"
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <>
      <a href={`${process.env.REACT_APP_PROXY}/auth/google`}>
        Login with Google
      </a>
      <button onClick={googleLogin}>Login with google button</button>
    </>
  );
};

export default Home;
