import createTheme from "spectacle/lib/themes/default";

const colors = {
  primary: "#007ACC",
  secondary: "white",
  tertiary: "white",
  quaternary: "white",
};

const fonts = {
  primary: {
    name: "Gloria Hallelujah",
    googleFont: true,
    styles: ["400", "700"],
  },
  secondary: "cursive",
  tertiary: "monospace",
};

export const theme = createTheme(colors, fonts);
