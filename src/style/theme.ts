import { createTheme} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    gray: {
      primary: string;
      neutral: string;
      white: string;
    };
  }
  // allow configuration using `createTheme`
  interface PaletteOptions {
    gray?: {
      primary?: string;
      neutral?: string;
      white?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#252826",
    },
    secondary: {
      main: "#F93103",
    },
    gray: {
      primary: "#A9A9A9",
      neutral: "#F7F7F7",
      white: "#FFFDFE",
    },
  },
});
