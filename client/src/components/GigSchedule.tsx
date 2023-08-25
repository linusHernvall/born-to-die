import { Box, SxProps, Typography } from "@mui/material";
import BasicTable from "./BasicTable";

function GigSchedule() {
  // CSS--------------------------------------------

  const topicSx: SxProps = {
    margin: "3rem 0",
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div>
      <Box sx={{ marginBottom: "3rem" }}>
        <Typography variant="h5" sx={topicSx}>
          Upcoming Shows
        </Typography>
        <BasicTable />
      </Box>
    </div>
  );
}

export default GigSchedule;
