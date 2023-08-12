import { Box, SxProps, Typography } from "@mui/material";
import BandMember from "../components/BandMember";

function Band() {
  // CSS--------------------------------------------
  const bandZoneSx: SxProps = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  const memberWrappersx: SxProps = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <Box sx={bandZoneSx} className="marginTop">
      <Typography sx={{ margin: "1rem 0" }} variant="h2">
        The Band
      </Typography>
      <Box sx={memberWrappersx}>
        <BandMember />
      </Box>
    </Box>
  );
}

export default Band;
