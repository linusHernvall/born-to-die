import { Container } from "@mui/material";
import GigSchedule from "../components/GigSchedule";
import VideoSection from "../components/VideoSection";

function Home() {
  return (
    <div>
      <VideoSection />

      <Container>
        <GigSchedule />
      </Container>
    </div>
  );
}

export default Home;
