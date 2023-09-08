import { Box, SxProps } from "@mui/material";
import { audioTracks } from "../data";
import MusicCard from "./MusicCard";
import Playthrough from "./Playthrough";

function MusicSection() {
  // CSS--------------------------------------------

  const containerSx: SxProps = {
    border: "2px solid gold",
    // display: "flex",
  };

  const musicWrapperSx: SxProps = {
    border: "2px solid red",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
  };

  const musicCardSx: SxProps = {
    // flex: "0 1 calc(33.33%)",
    // display: "flex",
  };

  return (
    <Box sx={containerSx}>
      <Playthrough />
      <Box sx={musicWrapperSx}>
        {audioTracks.map((track) => (
          <Box key={track.id} sx={musicCardSx}>
            <MusicCard track={track} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default MusicSection;
