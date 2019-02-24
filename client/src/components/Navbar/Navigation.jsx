import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";

import { black } from "../../theme/colors";
import { backgroundColor, fontColor } from "../../theme";

const Navigation = () => {
  return (
    <StyledNav>
      <Link to="/browse">Browse</Link>
      <Link to="/guides">Guides</Link>
      <StyledDropdown icon="ellipsis vertical">
        <Dropdown.Menu>
          <Dropdown.Item
            content="Discord"
            as="a"
            href="https://discord.gg/GAjpFa4"
            target="_blank"
            rel="nofollow noopener"
          />
          <Dropdown.Item
            content="Twitter"
            as="a"
            href="https://twitter.com/slashmacro"
            target="_blank"
            rel="nofollow noopener"
          />
        </Dropdown.Menu>
      </StyledDropdown>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Link = styled(NavLink)`
  display: flex;
  align-items: center;

  height: 100%;
  padding: 0 0.5rem;
  color: ${black};

  font-weight: 400;
  font-size: 1rem;

  &:hover,
  &:focus {
    text-decoration: underline;
    color: ${black};
  }
`;

const StyledDropdown = styled(Dropdown)`
  color: ${black};
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: ${black}00;

  &:hover,
  &:focus {
    background-color: ${black}15;
  }

  &&& {
    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color ease-in-out 150ms;

    i {
      height: auto;
      margin: 0;
    }

    .menu {
      background-color: ${backgroundColor};
      color: ${fontColor};
      margin-top: 1rem;

      .item {
        i,
        span {
          color: ${fontColor};
        }
      }
    }
  }
`;

export default Navigation;
