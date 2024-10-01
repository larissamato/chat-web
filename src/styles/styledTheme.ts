import { presetPalettes, presetDarkPalettes } from "@ant-design/colors";

export const pattern = {
  softBlue: "#3b96d1",
  blue: "#2277ae",
  blueDark: "#052D49",
  indigo: "#6610f2",
  purple: "#795AB0",
  pink: "#e83e8c",
  red: "#c72329",
  orange: "#dd8000",
  yellow: "#f0ad4e",
  yellowDark: "#D39B02",
  green: "#02B875",
  teal: "#20c997",
  cyan: "#17a2b8",
  white: "#fff",
  gray: "#c7c7c7",
  grayDark: "#343a40",
  primary: "#fff",
  secondary: "#c7c7c7",
  tertiary: "#eaeaea",
  quaternary: "#f8f8f8",
  menu: "#1657aa",
  text: "#171717",
  success: "#02B875",
  info: "#17a2b8",
  warning: "#f0ad4e",
  danger: "#d9534f",
  light: "#f8f9fa",
  dark: "#343a40",
  xs: "0",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

const light = {
  ...presetPalettes,
  ...pattern,
  red: presetPalettes.red.primary,
  blue: presetPalettes.blue[5],
  background: "#fff",
  content: "#f5f5f5",
  error: "#d51e0d",
  icons: "#262626",
  text: "#121212",
};

const dark = {
  ...presetDarkPalettes,
  ...pattern,
  blue: presetPalettes.blue[6],
  red: presetDarkPalettes.red.primary,
  background: "#141414",
  content: "#262626",
  error: "#c2263b",
  icons: "#fff",
  text: "#fff",
};

export { light, dark };
