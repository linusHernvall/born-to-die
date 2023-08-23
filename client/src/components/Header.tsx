import { Box, SxProps } from "@mui/material";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import Drawer from "./Drawer";

function Header() {
  // CSS--------------------------------------------
  const headerWrapperSx: SxProps = {
    width: "100%",
    maxWidth: "1920px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const headerSx: SxProps = {
    background: "transparent",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  };

  const logoSx: CSSProperties = {
    width: "10rem",
  };
  return (
    <Box sx={headerWrapperSx}>
      <Box sx={headerSx}>
        <Box
          sx={{
            width: "35px",
            height: "35px",
            marginLeft: "2rem",
          }}
        />
        <Link to={"/"}>
          <img
            src="../../images/btd-logo-red-trans.png"
            alt="Born To Die logotype"
            style={logoSx}
          />
        </Link>

        <Drawer />
      </Box>
    </Box>
  );
}

export default Header;
