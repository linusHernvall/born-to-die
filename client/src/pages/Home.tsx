import { Container } from "@mui/material";
import GigSchedule from "../components/GigSchedule";
import VideoSection from "../components/Videosection";
import Band from "./Band";

function Home() {
  return (
    <div>
      <VideoSection />

      <Container sx={{ maxWidth: "1012px" }}>
        <GigSchedule />
        <Band />
      </Container>
    </div>
  );
}

export default Home;
