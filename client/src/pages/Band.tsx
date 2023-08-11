import { Box, SxProps, Typography } from "@mui/material";
import BandMember from "../components/BandMember";

function Band() {
  // CSS--------------------------------------------
  const bandZone: SxProps = {
    border: "2px solid red",
  };

  return (
    <Box sx={bandZone} className="marginTop">
      <Typography>Band</Typography>
      <BandMember />
    </Box>
  );
}

export default Band;
