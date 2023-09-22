import { CardActionArea, SxProps } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MemberCard(props: {
  image: string;
  name: string;
  description: string;
  instrument: string;
}) {
  // CSS--------------------------------------------
  const cardSx: SxProps = {
    maxWidth: '400px',
    backgroundColor: '#000000',
    marginBottom: '2rem',
    border: '1px solid #FFFFFF',
    transition: 'transform 0.5s ease, box-shadow 0.2s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      border: '1px solid #C40000',
      boxShadow: '0 2px 10px #C40000',
    },
  };

  const imgSx: SxProps = {
    objectFit: 'contain',
  };

  const { image, name, instrument } = props;
  return (
    <Card sx={cardSx}>
      <CardActionArea>
        <CardMedia
          sx={imgSx}
          component="img"
          height="400px"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body1">{instrument}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
