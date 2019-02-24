import theme from "styled-theming";

import {
  white,
  black,
  offBlack,
  offWhite
} from "./colors";

export const backgroundColor = theme("mode", { light: offWhite, dark: offBlack });
export const fontColor = theme("mode", { light: black, dark: white })