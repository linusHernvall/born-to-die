import robinBandImg from "/images/btd-logo-cream.jpg";
import gcBandImg from "/images/btd-logo-red.jpg";
import linusBandImg from "/images/btd-logo-white.jpg";
import ericBandImg from "/images/btd-logo-yellow.jpg";

import spinelessAudio from "/audio/spineless.mp3";
import tSOAudio from "/audio/the-strong-ones.mp3";
import spinelessImg from "/images/ep2022.jpg";
import tSOImg from "/images/the-strong-ones.png";

export const bandMembers = [
  {
    id: 1,
    imgUrl: robinBandImg,
    fullName: "Robin Lagerborg",
    instrument: "guitar",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nam excepturi voluptatum placeat veritatis sunt in earum sapiente praesentium obcaecati!",
  },
  {
    id: 2,
    imgUrl: gcBandImg,
    fullName: "GC",
    instrument: "vocals",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nam excepturi voluptatum placeat veritatis sunt in earum sapiente praesentium obcaecati!",
  },
  {
    id: 3,
    imgUrl: ericBandImg,
    fullName: "Eric Skjuttorp",
    instrument: "drums",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nam excepturi voluptatum placeat veritatis sunt in earum sapiente praesentium obcaecati!",
  },
  {
    id: 4,
    imgUrl: linusBandImg,
    fullName: "Linus Hernvall",
    instrument: "bass",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nam excepturi voluptatum placeat veritatis sunt in earum sapiente praesentium obcaecati!",
  },
];

export const audioTracks = [
  {
    id: 1,
    imgUrl: tSOImg,
    title: "The Strong Ones",
    band: "Born To Die",
    song: tSOAudio,
  },
  {
    id: 2,
    imgUrl: spinelessImg,
    title: "Spineless",
    band: "Born To Die",
    song: spinelessAudio,
  },
];
