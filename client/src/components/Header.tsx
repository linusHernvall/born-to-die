import { Box, SxProps, Theme } from "@mui/material";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import Drawer from "./Drawer";

function Header() {
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

// CSS ----------------------------------------------

const headerSx: SxProps<Theme> = (theme) => ({
  background: "transparent",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: "2px solid red",
  width: "100%",
  height: "15rem",
  position: "absolute",
  top: 0,
  left: 0,
});

const logoSx: CSSProperties = {
  width: "10rem",
};

export default Header;
