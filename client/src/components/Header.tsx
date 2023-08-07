import { Box, SxProps } from "@mui/material";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import Drawer from "./Drawer";

function Header() {
  // CSS--------------------------------------------
  const headerSx: SxProps = {
    background: "transparent",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    // height: "8rem",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: "10",
    // border: "2px solid red",
  };

  const logoSx: CSSProperties = {
    width: "10rem",
  };
  return (
    <Box sx={headerSx}>
      <Box
        sx={{
          width: "35px",
          height: "35px",
          marginLeft: "2rem",
          // border: "1px solid blue",
        }}
      />
      <Link to={"/"}>
        <img
          src="../../images/btd-logo-white-trans.png"
          alt="Born To Die logotype"
          style={logoSx}
        />
      </Link>

      {/* <MenuIcon
        sx={{ marginRight: "4rem", color: "#FFFFFF", cursor: "pointer" }}
        fontSize="large"
      /> */}
      <Drawer />
    </Box>
  );
}

export default Header;
