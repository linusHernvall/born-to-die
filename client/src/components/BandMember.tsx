import { Box } from "@mui/material";
import { bandMembers } from "../bandData";
import BandMemberCard from "./BandMeberCard";

function BandMember() {
  return (
    <Box>
      <ul>
        {bandMembers.map((member) => (
          <li key={member.id}>
            {/* <MemberCard
              image={member.imgUrl}
              name={member.fullName}
              description={member.description}
              instrument={member.instrument}
            /> */}
            <BandMemberCard
              image={member.imgUrl}
              name={member.fullName}
              description={member.description}
              instrument={member.instrument}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default BandMember;
