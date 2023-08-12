import { CardActionArea, SxProps } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MemberCard(props: {
  image: string;
  name: string;
  description: string;
  instrument: string;
}) {
  // CSS--------------------------------------------
  const imgSx: SxProps = {
    objectFit: "contain",
  };

  const { image, name, description, instrument } = props;
  return (
    <Card
      sx={{ maxWidth: 500, backgroundColor: "green", marginBottom: "1rem" }}
    >
      <CardActionArea>
        <CardMedia
          sx={imgSx}
          component="img"
          height="200"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body1">{instrument}</Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
