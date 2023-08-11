import { Typography } from "@mui/material";
import { bandMembers } from "../bandData";

function BandMember() {
  return (
    <div>
      <ul>
        {bandMembers.map((member) => (
          <li key={member.id}>
            <Typography>{member.fullName}</Typography>
            <Typography>{member.description}</Typography>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BandMember;
