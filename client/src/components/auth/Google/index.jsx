import React from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";

const GoogleAuth = () => {
  const googleResponse = response => {
    axios
      .post("/auth/google", response)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  return (
    <GoogleLogin
      clientId="516991684201-dqk9chil2u9upv9ck0l9avbl820trjm6.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={googleResponse}
      cookiePolicy="single_host_origin"
    />
  );
};

export default GoogleAuth;
