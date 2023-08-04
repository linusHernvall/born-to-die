import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TicketButton from "./TicketButton";

function createData(date: string, venue: string, location: string) {
  return { date, venue, location };
}

const rows = [
  createData("Thu 18 May", "The Abyss", "Gothenburg, Sweden"),
  createData("Sat 27 May", "Pow Wow Festival", "Stockholm, Sweden"),
  createData("Fri 18 Aug", "Fredagsmangel", "Stockholm, Sweden"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.date}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: index % 2 === 0 ? "#000000" : "#000000",
              }}
            >
              <TableCell component="th" scope="row">
                <Typography>{row.date}</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography>{row.venue}</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography>{row.location}</Typography>
              </TableCell>
              <TableCell align="right">
                <TicketButton />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
