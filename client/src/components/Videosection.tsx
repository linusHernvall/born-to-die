import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useRef } from "react";

function VideoSection() {
  const theme = useTheme();
  const isWideScreen = useMediaQuery(theme.breakpoints.up("sm"));

  const videoRef = useRef<HTMLVideoElement | null>(null);

  // useEffect(() => {
  //   if (videoRef.current) {
  //     // Auto-play the video
  //     videoRef.current.play().catch((error) => {
  //       console.log("Autoplay was prevented:", error);
  //     });
  //   }
  // }, []);

  return (
    <Box
      sx={{
        position: "relative",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      {isWideScreen ? (
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
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        />
      )}
      <Box
        sx={{
          position: "absolute",
          top: "90%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <KeyboardArrowDownIcon
          sx={{
            color: "white",
            fontSize: "8rem",
          }}
        />
      </Box>
    </Box>
  );
}

export default VideoSection;
