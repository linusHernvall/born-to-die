import { Box, SxProps } from "@mui/material";
import { audioTracks } from "../bandData";
import MusicCard from "./MusicCard";

function MusicSection() {
  // CSS--------------------------------------------
  const musicZoneSx: SxProps = {
    border: "2px solid red",
    display: "flex",
    justifyContent: "center",
  };

  return (
    <>
      {audioTracks.map((track) => (
        <Box key={track.id} sx={musicZoneSx}>
          <MusicCard track={track} />
        </Box>
      ))}
    </>
  );
}

export default MusicSection;
