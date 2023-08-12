import { Box, SxProps } from "@mui/material";
import BandMember from "../components/BandMember";

function Band() {
  // CSS--------------------------------------------
  const bandZone: SxProps = {
    border: "2px solid red",
    display: "flex",
    justifyContent: "center",
  };

  return (
    <Box sx={bandZone} className="marginTop">
      <BandMember />
    </Box>
  );
}

export default Band;
