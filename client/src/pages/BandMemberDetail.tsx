import { Box, Typography } from "@mui/material";
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

  return (
    <Box className="marginTop">
      <Typography variant="h2">{member.fullName}</Typography>
      <Typography variant="body2">{member.description}</Typography>
    </Box>
  );
}

export default BandMemberDetail;
