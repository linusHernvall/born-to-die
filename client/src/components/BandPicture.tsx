import { Box, SxProps } from "@mui/material";

function BandPicture() {
  //CSS----------------------------------------
  const backgroundImgWrapperSx: SxProps = {
    width: "100%",
    height: "600px",
    // marginTop: "3rem",
  };

  const backgroundImgSx: SxProps = {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundImage: `url(../../images/btd-band-img.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `
      linear-gradient(to top, black, transparent 5%, transparent 50%),
      linear-gradient(to bottom, black, transparent 5%, transparent 50%),
      radial-gradient(circle at center, transparent 35%, black 95%)`,
      pointerEvents: "none", // So the overlay doesn't interfere with any interactions
    },
  };

  return (
    <Box sx={backgroundImgWrapperSx}>
      <Box sx={backgroundImgSx} />
    </Box>
  );
}

export default BandPicture;
