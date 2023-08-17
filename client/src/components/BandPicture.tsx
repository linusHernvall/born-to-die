import { Box, SxProps } from "@mui/material";

function BandPicture() {
  //CSS----------------------------------------
  const backgroundImgSx: SxProps = {
    backgroundImage: "url(../../images/btd-band-img.jpg)",
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const backgroundImgWrapperSx: SxProps = {
    width: "100%",
    height: "600px",
    marginTop: "3rem",
  };

  return (
    <Box sx={backgroundImgWrapperSx}>
      <Box sx={backgroundImgSx} />
    </Box>
  );
}

export default BandPicture;
