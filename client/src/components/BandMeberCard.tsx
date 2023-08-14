import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { SxProps, styled } from "@mui/material/styles";
import { useState } from "react";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const cardSx: SxProps = {
  maxWidth: "500px",
  backgroundColor: "#000000",
  marginBottom: "1.5rem",
  border: "1px solid #FFFFFF",
  transition: "transform 0.5s ease, box-shadow 0.2s ease",
  "&:hover": {
    transform: "scale(1.05)",
    border: "1px solid #C40000",
    boxShadow: "0 2px 10px #C40000",
  },
};

const imgSx: SxProps = {
  objectFit: "contain",
};

const expandButtonSx: SxProps = {
  background: "#000000",
  border: "1px solid #FFFFFF",
  "&:hover": {
    background: "#FFFFFF",
    border: "1px solid #000000",
  },
};

const buttonArrow: SxProps = {
  color: "#FFFFFF",
  "&:hover": {
    color: "#000000",
  },
};

export default function BandMemberCard(props: {
  image: string;
  name: string;
  description: string;
  instrument: string;
}) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { image, name, description, instrument } = props;

  return (
    <Card sx={cardSx}>
      <CardMedia
        sx={imgSx}
        component="img"
        // height="300"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body1">{instrument}</Typography>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            sx={expandButtonSx}
          >
            <ExpandMoreIcon sx={buttonArrow} />
          </ExpandMore>
        </CardActions>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
          {/* <Typography paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            cum error quos consectetur ab reiciendis architecto amet, suscipit,
            tempore ipsam corrupti, sequi nostrum dolor dicta totam distinctio
            itaque veritatis similique recusandae harum. Officiis, sapiente
            reprehenderit?
          </Typography>
          <Typography paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            nisi iusto aspernatur odio. Distinctio placeat et eaque, eligendi
            esse similique perspiciatis magnam eius.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            vitae?
          </Typography> */}
        </CardContent>
      </Collapse>
    </Card>
  );
}
