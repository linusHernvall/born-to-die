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

  const cardSx: SxProps = {
    maxWidth: 500,
    backgroundColor: "#000000",
    marginBottom: "1rem",
    border: "1px solid #FFFFFF",
  };

  const { image, name, description, instrument } = props;
  return (
    <Card sx={cardSx}>
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
