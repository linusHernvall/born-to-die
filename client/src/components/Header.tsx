import { Box, SxProps } from "@mui/material";
import { CSSProperties, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "./Drawer";

function Header() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        // If we scroll down
        setHeaderVisible(false);
      } else {
        // If we scroll up
        setHeaderVisible(true);
      }
      setLastScrollTop(st <= 0 ? 0 : st); // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  // CSS--------------------------------------------
  const headerSx: SxProps = {
    background: "transparent",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    position: "fixed",
    top: headerVisible ? "0" : "-200px",
    left: 0,
    transition: "top 0.3s ease-in-out",
    zIndex: 1000,
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
  );
}

export default Header;
