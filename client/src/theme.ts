import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface ThemeOptions {
    h1?: {
      fontWeight?: 900;
    };
    h3?: {
      fontSize?: string;
      fontFamily?: string;
    };
    body1?: {
      fontFamily?: string;
      fontSize?: string;
    };
    body2?: {
      fontFamily?: string;
      fontSize?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#C40000",
    },
    tertiary: {
      main: "#00F",
    },
  },
  typography: {
    h1: {
      fontFamily: "Castoro Titling",
      fontWeight: 900,
      color: "#FFFFFF",
    },
    h2: {
      fontFamily: "Castoro Titling",
      fontWeight: 700,
      color: "#FFFFFF",
    },
    h3: {
      fontFamily: "Castoro Titling",
      fontWeight: 600,
      color: "#FFFFFF",
    },
    h4: {
      fontFamily: "Castoro Titling",
      fontWeight: 600,
      color: "#FFFFFF",
    },
    h5: {
      fontFamily: "Castoro Titling",
      fontWeight: 600,
      color: "#FFFFFF",
    },
    h6: {
      fontFamily: "Castoro Titling",
      fontWeight: 600,
      color: "#FFFFFF",
    },
    body1: {
      fontFamily: "Castoro Titling",
      color: "#FFFFFF",
      fontSize: "15px",
    },
    body2: {
      fontFamily: "Helvetica",
      fontSize: "12px",
      color: "#FFFFFF",
    },
    caption: {
      fontFamily: "Helvetica",
    },
  },
});
