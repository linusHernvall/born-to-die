import { Box, useMediaQuery, useTheme } from "@mui/material";
import { bandMembers } from "../data";
import MemberCard from "./MemberCard";

function BandMember() {
  const theme = useTheme();
  const isWideScreen = useMediaQuery(theme.breakpoints.up("md"));

  const chunkedBandMembers = [];
  for (let i = 0; i < bandMembers.length; i += 2) {
    chunkedBandMembers.push(bandMembers.slice(i, i + 2));
  }

  return (
    <Box>
      {isWideScreen ? (
        <ul>
          {chunkedBandMembers.map((rowMembers, rowIndex) => (
            <Box
              key={rowIndex}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "2rem",
              }}
            >
              {rowMembers.map((member) => (
                <li key={member.id}>
                  <MemberCard
                    image={member.imgUrl}
                    name={member.fullName}
                    description={member.description}
                    instrument={member.instrument}
                  />
                </li>
              ))}
            </Box>
          ))}
        </ul>
      ) : (
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {bandMembers.map((member) => (
            <li
              key={member.id}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <MemberCard
                image={member.imgUrl}
                name={member.fullName}
                description={member.description}
                instrument={member.instrument}
              />
            </li>
          ))}
        </ul>
      )}
    </Box>
  );
}

export default BandMember;
