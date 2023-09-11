import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import client from "./apolloClient";
import App from "./App";
import "./index.css";
import Band from "./pages/Band";
import BandMemberDetail from "./pages/BandMemberDetail";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Register from "./pages/Register";
import Shows from "./pages/Shows";
import { theme } from "./theme";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="music" element={<Music />} />
      <Route path="contact" element={<Contact />} />
      <Route path="band" element={<Band />} />
      <Route path="shows" element={<Shows />} />
      <Route path="register" element={<Register />} />
      <Route path="band-member/:id" element={<BandMemberDetail />} />
      <Route
        path="*"
        element={
          <h2
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              marginTop: "20rem",
            }}
          >
            404 not found
          </h2>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
);
