import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "semantic-ui-react";

import { black, white, offBlack } from "../../theme/colors";

const UserActions = ({ loggedIn }) => {
  return (
    <Wrapper>
      {!loggedIn && <LoggedOut />}
      {loggedIn && <LoggedIn />}
    </Wrapper>
  );
};

UserActions.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};

const Wrapper = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-auto-flow: column;
  justify-content: flex-end;
  margin-right: 1rem;
`;

export default UserActions;

const LoggedOut = () => {
  return (
    <>
      <StyledButton content="Log in" />
      <StyledButton content="Sign up" />
    </>
  );
};

const StyledButton = styled(Button)`
  &&& {
    background-color: ${black};
    color: ${white};
    padding: 0.5rem 1rem;

    font-size: 0.875rem;
    font-weight: 500;

    transition: background-color ease-in-out 100ms;

    &:hover,
    &:focus {
      background-color: ${offBlack};
    }
  }
`;

const LoggedIn = () => {
  return <p>logged in</p>;
};
