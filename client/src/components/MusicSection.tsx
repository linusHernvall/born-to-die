import { Box, SxProps } from "@mui/material";
import MusicCard from "./MusicCard";

function MusicSection() {
  // CSS--------------------------------------------
  const musicZoneSx: SxProps = {
    border: "2px solid red",
    display: "flex",
    justifyContent: "center",
  };

  return (
    <Box sx={musicZoneSx}>
      <MusicCard />
    </Box>
  );
}

export default MusicSection;
