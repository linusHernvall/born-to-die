import { Box, SxProps } from "@mui/material";
import BandMember from "../components/BandMember";
import BandPicture from "../components/BandPicture";
import Biography from "../components/Biography";

function Band() {
  // CSS--------------------------------------------
  const bandZoneSx: SxProps = {
    display: "flex",
    justifyContent: "center",
  };

  const bioBandWrapperSx: SxProps = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <Box sx={bandZoneSx}>
      <Box sx={bioBandWrapperSx}>
        <BandPicture />
        <Biography />
        <BandMember />
      </Box>
    </Box>
  );
}

export default Band;
