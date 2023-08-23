import { Box, Container } from "@mui/material";
import GigSchedule from "../components/GigSchedule";
import MusicSection from "../components/MusicSection";
import Playthrough from "../components/Playthrough";
import VideoSection from "../components/Videosection";
import Band from "./Band";

function Home() {
  return (
    <Box>
      <VideoSection />

      <Container sx={{ maxWidth: "1012px" }}>
        <GigSchedule />
        <Band />
      </Container>
      <Playthrough />
      <Container sx={{ maxWidth: "1012px" }}>
        <MusicSection />
      </Container>
    </Box>
  );
}

export default Home;
