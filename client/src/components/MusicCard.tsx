import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { useRef, useState } from "react";

export default function MusicCard() {
  const theme = useTheme();

  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  function handlePlayMusic() {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }

  function handleSkipBackward() {
    if (audioRef.current) {
      audioRef.current.currentTime -= 10;
    }
  }
  function handleSkipForward() {
    if (audioRef.current) {
      audioRef.current.currentTime += 10;
    }
  }

  return (
    <Card
      sx={{ display: "flex", maxWidth: "300px", border: "1px solid #FFFFFF" }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          sx={{ height: "300px" }}
          image="../../images/the-strong-ones.png"
          alt="Single cover"
        />
        <CardContent sx={{ flex: "1 0 auto", backgroundColor: "primary.main" }}>
          <Typography component="div" variant="h5">
            The Strong Ones
          </Typography>
          <Typography variant="body1" component="div">
            Born To Die
          </Typography>
        </CardContent>
        <Box
          sx={{
            backgroundColor: "primary.main",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pl: 1,
            pb: 1,
          }}
        >
          <IconButton
            aria-label="previous"
            onClick={handleSkipBackward}
            sx={{ color: "#FFFFFF" }}
          >
            {theme.direction === "rtl" ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>

          <IconButton aria-label="play/pause" onClick={handlePlayMusic}>
            {isPlaying ? (
              <PauseIcon sx={{ height: 38, width: 38, color: "#FFFFFF" }} />
            ) : (
              <PlayArrowIcon sx={{ height: 38, width: 38, color: "#FFFFFF" }} />
            )}
          </IconButton>

          <IconButton
            aria-label="next"
            onClick={handleSkipForward}
            sx={{ color: "#FFFFFF" }}
          >
            {theme.direction === "rtl" ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
        </Box>
      </Box>
      <audio ref={audioRef} src="../../audio/the-strong-ones.mp3" />
    </Card>
  );
}
