import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useRef } from "react";

function VideoSection() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));

  // <div
  //   style={{
  //     top: 0,
  //     left: 0,
  //     width: "100%",
  //     height: "100vh",
  //   }}
  // >
  // <img
  //   src="../../images/background.jpg"
  //   alt="Band playing live"
  //   style={{ width: "100%", height: "100%", objectFit: "cover" }}
  // />
  // </div>

  //FETCH FROM DB LATER

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Auto-play the video
      videoRef.current.play().catch((error) => {
        console.log("Autoplay was prevented:", error);
      });
    }
  }, []);

  return (
    <Box
      style={{
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      {isSmallScreen ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src="../../videos/videoBg.mp4" type="video/mp4" />
        </video>
      ) : (
        <img
          src="../../images/background.jpg"
          alt="Band playing live"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      )}
    </Box>
  );
}

export default VideoSection;
