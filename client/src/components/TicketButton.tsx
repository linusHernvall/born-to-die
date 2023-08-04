import { SxProps, Typography } from "@mui/material";
import Button from "@mui/material/Button";

function TicketButton() {
  // CSS--------------------------------------------

  const buttonSx: SxProps = {
    background: "#000000",
    borderRadius: "5px",
    border: "1px solid #FFFFFF",
  };

  return (
    <div>
      <Button sx={buttonSx}>
        <Typography variant="body1">Tickets</Typography>
      </Button>
    </div>
  );
}

export default TicketButton;
