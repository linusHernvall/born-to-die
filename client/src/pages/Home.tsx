import { Container } from "@mui/material";
import GigSchedule from "../components/GigSchedule";
import Videosection from "../components/Videosection";

function Home() {
  return (
    <div>
      <Videosection />

      <Container>
        <GigSchedule />
      </Container>
    </div>
  );
}

export default Home;
