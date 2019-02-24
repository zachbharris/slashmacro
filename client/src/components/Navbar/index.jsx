import React from "react";
import styled from "styled-components";

import { fontColor } from "../../theme";
import { rarity } from "../../theme/colors";

import HomeLink from "./HomeLink";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import UserActions from "./UserActions";

const Navbar = () => {
  return (
    <StyledNavbar>
      <HomeLink />
      <Navigation />
      <SearchBar />
      <UserActions loggedIn={false} />
    </StyledNavbar>
  );
};

const StyledNavbar = styled.div`
  background-color: ${rarity.legendary};
  color: ${fontColor};

  height: 4rem;
  width: 100%;

  display: grid;
  grid-template-columns: 4rem auto minmax(auto, 300px) 1fr;
  grid-column-gap: 0.5rem;
  align-items: center;
  justify-content: flex-start;

  &:last-child {
    justify-content: flex-end;
  }
`;

export default Navbar;
