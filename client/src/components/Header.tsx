import { Box, SxProps, Theme } from "@mui/material";
import { CSSProperties } from "react";
import Drawer from "./Drawer";

function Header() {
  return (
    <Box sx={headerSx}>
      <Box
        sx={{
          width: "35px",
          height: "35px",
          marginLeft: "4rem",
          // border: "1px solid blue",
        }}
      />
      <Box>
        <img
          src="../../public/images/btd-logo-white-trans.png"
          alt="Born To Die logotype"
          style={logoSx}
        />
      </Box>
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
});

const logoSx: CSSProperties = {
  width: "10rem",
};

export default Header;
