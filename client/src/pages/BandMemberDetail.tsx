import { Box, Container, SxProps, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { bandMembers } from "../data";

function BandMemberDetail() {
  const { id } = useParams<{ id: string | undefined }>();

  if (!id) {
    return <Typography variant="h3">Invalid ID</Typography>;
  }

  const member = bandMembers.find((m) => m.id === parseInt(id, 10));

  if (!member) {
    return <Typography variant="h3">Member not found</Typography>;
  }

  // CSS-------------------------------------------------------------
  const contentWrapperSx: SxProps = {
    border: "2px solid red",
    display: "flex",
    flex: "wrap",
    maxWidth: "1000px",
  };

  const backgroundImgWrapperSx: SxProps = {
    width: "100%",
    border: "2px solid green",
  };
  const backgroundImgSx: SxProps = {
    backgroundImage: `url(${member.bigImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "500px",
    height: "600px",
    minHeight: "400px", // this could be useful
  };

  return (
    <Box className="marginTop">
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          border: "2px solid gold",
        }}
      >
        <Typography variant="h3">{member.fullName}</Typography>
        <Box sx={contentWrapperSx}>
          <Typography variant="body2">{member.description}</Typography>
          <Box sx={backgroundImgWrapperSx}>
            <Box sx={backgroundImgSx} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default BandMemberDetail;
