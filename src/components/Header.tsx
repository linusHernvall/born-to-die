import MenuIcon from "@mui/icons-material/Menu";
import { Box, SxProps, Theme } from "@mui/material";

function Header() {
  return (
    <Box sx={headerSx}>
      <Box
        sx={{
          width: "35px",
          height: "35px",
          marginLeft: "4rem",
          border: "1px solid blue",
        }}
      />
      <Box>LOGOTYPE</Box>
      <MenuIcon sx={{ marginRight: "4rem" }} fontSize="large" />
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

export default Header;
