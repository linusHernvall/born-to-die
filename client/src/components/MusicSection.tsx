import { Box, SxProps } from "@mui/material";
import { audioTracks } from "../data";
import MusicCard from "./MusicCard";

function MusicSection() {
  // CSS--------------------------------------------
  const containerSx: SxProps = {
    border: "2px solid red",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "16px",
  };

  const musicCardSx: SxProps = {
    flex: "0 1 calc(33.33% - 16px)",
  };

  return (
    <Box sx={containerSx}>
      {audioTracks.map((track) => (
        <Box key={track.id} sx={musicCardSx}>
          <MusicCard track={track} />
        </Box>
      ))}
    </Box>
  );
}

export default MusicSection;
