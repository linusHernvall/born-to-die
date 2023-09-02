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
    maxWidth: "500px",
  };

  const backgroundImgWrapperSx: SxProps = {
    width: "100%",
    border: "2px solid green",
    zIndex: "-10",
  };
  const backgroundImgSx: SxProps = {
    backgroundImage: `url(${member.bigImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "400px",
    height: "400px",
    position: "fixed",
    left: 0,
    bottom: 0,
    zIndex: "-1",
  };

  return (
    <>
      {/* The background image */}
      <Box sx={backgroundImgSx} />
      {/* Your existing components */}
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
            <Typography
              dangerouslySetInnerHTML={{
                __html: member.description.replace(/\n/g, "<br/>"),
              }}
              variant="body2"
            ></Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default BandMemberDetail;
