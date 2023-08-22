import Forward10Icon from "@mui/icons-material/Forward10";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Replay10Icon from "@mui/icons-material/Replay10";
import { LinearProgress } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { useEffect, useRef, useState } from "react";

type Track = {
  id: number;
  imgUrl: string;
  title: string;
  band: string;
  song: string;
};

interface MusicCardProps {
  track: Track;
}

export default function MusicCard({ track }: MusicCardProps) {
  const theme = useTheme();

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

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

  function handleTimeUpdate() {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  }

  function handleMetadataLoaded() {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  }

  function handleProgressClick(event: React.MouseEvent<HTMLElement>) {
    const width = event.currentTarget.clientWidth;
    const clickX =
      event.clientX - event.currentTarget.getBoundingClientRect().left;
    const newTime = (clickX / width) * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  }

  function handleProgressDrag(event: React.MouseEvent<HTMLElement>) {
    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
    handleProgressClick(event);
  }

  function formatTime(time: number) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  function handleAudioEnd() {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("loadedmetadata", handleMetadataLoaded);
      audio.addEventListener("ended", handleAudioEnd);

      return () => {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("loadedmetadata", handleMetadataLoaded);
        audio.addEventListener("ended", handleAudioEnd);
      };
    }
  }, []);

  return (
    <Card
      sx={{ display: "flex", maxWidth: "300px", border: "1px solid #FFFFFF" }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          sx={{ height: "300px" }}
          image={track.imgUrl}
          alt="Single cover"
        />
        <CardContent sx={{ flex: "1 0 auto", backgroundColor: "primary.main" }}>
          <Typography component="div" variant="h5">
            {track.title}
          </Typography>
          <Typography variant="body1" component="div">
            {track.band}
          </Typography>
        </CardContent>
        <Box
          sx={{
            backgroundColor: "primary.main",
            pl: 1.5,
            pr: 1.5,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="body2"
              sx={{ width: "30px", textAlign: "right" }}
            >
              {formatTime(currentTime)}
            </Typography>

            <LinearProgress
              variant="determinate"
              value={(currentTime / duration) * 100}
              sx={{
                flexGrow: 1,
                marginX: 1,
                backgroundColor: "#FFFFFF",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "secondary.main",
                },
              }}
              onClick={handleProgressClick}
              onMouseMove={(e) => {
                if (e.buttons === 1) handleProgressDrag(e);
              }}
            />

            <Typography variant="body2" sx={{ width: "30px" }}>
              -{formatTime(duration - currentTime)}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              aria-label="previous"
              onClick={handleSkipBackward}
              sx={{ color: "#FFFFFF" }}
            >
              {theme.direction === "rtl" ? (
                <Forward10Icon
                  sx={{ height: 35, width: 35, color: "#FFFFFF" }}
                />
              ) : (
                <Replay10Icon
                  sx={{ height: 35, width: 35, color: "#FFFFFF" }}
                />
              )}
            </IconButton>

            <IconButton aria-label="play/pause" onClick={handlePlayMusic}>
              {isPlaying ? (
                <PauseIcon sx={{ height: 50, width: 50, color: "#FFFFFF" }} />
              ) : (
                <PlayArrowIcon
                  sx={{ height: 50, width: 50, color: "#FFFFFF" }}
                />
              )}
            </IconButton>

            <IconButton
              aria-label="next"
              onClick={handleSkipForward}
              sx={{ color: "#FFFFFF" }}
            >
              {theme.direction === "rtl" ? (
                <Replay10Icon
                  sx={{ height: 35, width: 35, color: "#FFFFFF" }}
                />
              ) : (
                <Forward10Icon
                  sx={{ height: 35, width: 35, color: "#FFFFFF" }}
                />
              )}
            </IconButton>
          </Box>
        </Box>
      </Box>
      <audio ref={audioRef} src={track.song} />
    </Card>
  );
}
