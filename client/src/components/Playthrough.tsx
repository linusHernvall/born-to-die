import { useRef } from "react";

function Playthrough() {
  //CSS----------------------------------------
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      style={{
        width: "60%",
        // height: "100vh",
        objectFit: "cover",
        margin: "1rem 0 3rem",
      }}
    >
      <source src="../../videos/hell-inside-pt.mp4" type="video/mp4" />
    </video>
  );
}

export default Playthrough;
