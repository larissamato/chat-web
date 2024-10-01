import { theme } from "antd";

const { defaultAlgorithm, darkAlgorithm } = theme;

const altered = {
  fontSizeHeading1: 25,
  fontSizeHeading2: 22,
  fontWeightStrong: 300,
  lineHeightHeading1: 1,
  titleMarginBottom: "0px",
};

const light = {
  algorithm: defaultAlgorithm,
  token: altered,
};

const dark = {
  algorithm: darkAlgorithm,
  token: altered,
};

export { light, dark };
