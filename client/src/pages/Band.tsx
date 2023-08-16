import { Box, SxProps } from "@mui/material";
import BandMember from "../components/BandMember";
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
  const memberWrapperSx: SxProps = {
    marginTop: "3rem",
    // width: "100%",
  };

  return (
    <Box sx={bandZoneSx}>
      <Box sx={bioBandWrapperSx}>
        <Biography />
        <Box sx={memberWrapperSx}>
          <BandMember />
        </Box>
      </Box>
    </Box>
  );
}

export default Band;
