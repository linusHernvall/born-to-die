import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import Band from "./pages/Band";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Music from "./pages/Music";

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

const theme = createTheme({
  palette: {},
  typography: {
    h1: {
      fontFamily: "Castoro Titling",
      fontWeight: 900,
    },
    h2: {
      fontFamily: "Castoro Titling",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "Castoro Titling",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "Castoro Titling",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "Castoro Titling",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "Castoro Titling",
      fontWeight: 600,
    },
    body1: {
      fontFamily: "Helvetica",
    },
    body2: {
      fontFamily: "Helvetica",
    },
    caption: {
      fontFamily: "Helvetica",
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="music" element={<Music />} />
      <Route path="contact" element={<Contact />} />
      <Route path="band" element={<Band />} />
      <Route path="*" element={<h2>404 not found</h2>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);