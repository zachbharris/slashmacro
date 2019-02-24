import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { black } from "../../theme/colors";

import Logo from "./Logo";

const HomeLink = () => {
  return (
    <Link to="/">
      <Logo color={black} height="40" width="40" />
    </Link>
  );
};

const Link = styled(NavLink)`
  height: 4rem;
  width: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    will-change: transform;
    transition: transform ease-in-out 150ms;
  }

  &:hover {
    svg {
      transform: scale(1.1);
    }
  }
  &:active {
    svg {
      transform: scale(0.9);
    }
  }
`;

export default HomeLink;
