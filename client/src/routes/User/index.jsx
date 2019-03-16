import React from "react";
import PropTypes from "prop-types";

const User = ({ history, location, match }) => {
  return <h1>Hello {match.params.userId}</h1>;
};

User.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

User.defaultProps = {};

export default User;
