import React from "react";
import styled from "styled-components";
import { Search } from "semantic-ui-react";

import { black } from "../../theme/colors";

const SearchBar = () => {
  return <StyledSearchBar />;
};

const StyledSearchBar = styled(Search)`
  height: 2rem;

  .ui.input {
    height: 100%;
    width: 100%;
    padding: 0;

    input {
      border-radius: 5px;
      background-color: ${black}15;
      font-size: 0.875rem;

      width: 100%;

      padding: 0.5rem 1rem 0.5rem 2.5rem;

      &:focus {
        border-color: ${black}50;
      }
    }

    i {
      right: auto;
      left: 0;
      width: 2rem;
      font-size: 1rem;
    }
  }
`;

export default SearchBar;
