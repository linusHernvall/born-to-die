import { Box, Container } from "@mui/material";
import { useEffect } from "react";
import GigSchedule from "../components/GigSchedule";
import MusicSection from "../components/MusicSection";
import VideoSection from "../components/Videosection";
import Band from "./Band";

function Home() {
  useEffect(() => {
    document.title = "Home - Born To Die";
  }, []);
  return (
    <Box>
      <VideoSection />
      <Container>
        <GigSchedule />
        <Band />
        {/* <Playthrough /> */}
        <MusicSection />
      </Container>
    </Box>
  );
}

export default Home;
