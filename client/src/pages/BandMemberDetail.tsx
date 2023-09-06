import {
  Box,
  SxProps,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { bandMembers } from "../data";

function BandMemberDetail() {
  const theme = useTheme();
  const isWideScreen = useMediaQuery(theme.breakpoints.up("md"));

  const { id } = useParams<{ id: string | undefined }>();
  const member = id && bandMembers.find((m) => m.id === parseInt(id, 10));

  if (!id) {
    return <Typography variant="h3">Invalid ID</Typography>;
  }

  if (!member) {
    return <Typography variant="h3">Member not found</Typography>;
  }

  // CSS-------------------------------------------------------------
  const phoneBackgroundImgSx: SxProps = {
    position: "relative",
    height: "50vh",
    backgroundColor: "rgba(0,0,0,0.1)",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `url(${member.bigImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      maskImage: `linear-gradient(to bottom, black 0%, transparent 100%)`,
      WebkitMaskImage: `linear-gradient(to bottom, black 0%, transparent 100%)`,
    },
  };
  const desktopBackgroundImgSx: SxProps = {
    position: "relative",
    height: "100vh",
    width: "33%",
    backgroundColor: "rgba(0,0,0,0.1)",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `url(${member.bigImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      maskImage: `linear-gradient(to right, black 0%, transparent 100%)`,
      WebkitMaskImage: `linear-gradient(to right, black 0%, transparent 100%)`,
    },
  };

  return (
    <Box sx={{ display: isWideScreen ? "flex" : "block" }}>
      {isWideScreen ? (
        <Box sx={desktopBackgroundImgSx} />
      ) : (
        <Box sx={phoneBackgroundImgSx} />
      )}
      <Box
        sx={{
          width: isWideScreen ? "70%" : "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          // border: "2px solid gold",
          padding: "0 5rem",
        }}
      >
        <Box>
          <Typography variant="h3">{member.fullName}</Typography>
          <Typography variant="body1">{member.instrument}</Typography>
          <Typography
            dangerouslySetInnerHTML={{
              __html: member.description.replace(/\n/g, "<br/>"),
            }}
            variant="body2"
          ></Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default BandMemberDetail;
