import image1 from "../assets/images/image1.jpg";
import netflix from "../assets/images/netflix.webp";
import prime from "../assets/images/prime.webp";
import icon from "../assets/images/icon.webp";

interface DataProps {
  id: number;
  image: string;
}

export const data: DataProps[] = [
  {
    id: 1,
    image: image1,
  },
  {
    id: 2,
    image: image1,
  },
  {
    id: 3,
    image: image1,
  },
];

export const gridData = [
  {
    id: 1,
    number: 1,
    image: image1,
    name: "A Girl and ann Astrounaut",
  },
  {
    id: 2,
    number: 1,
    image: image1,
    name: "The Internet of Love",
  },
  {
    id: 3,
    number: 1,
    image: image1,
    name: "You",
  },
  {
    id: 4,
    number: 2,
    image: image1,
    name: "Zvjezdane staze: Picard",
  },
  {
    id: 5,
    number: 2,
    image: image1,
    name: "A Girl and ann Astrounaut",
  },
  {
    id: 6,
    number: 2,
    image: image1,
    name: "The Internet of Love",
  },
  {
    id: 7,
    number: 3,
    image: image1,
    name: "You",
  },
  {
    id: 8,
    number: 3,
    image: image1,
    name: "Zvjezdane staze: Picard",
  },
  {
    id: 9,
    number: 3,
    image: image1,
    name: "Zvjezdane staze: Picard",
  },
];
export const platforms = [
  {
    id: 1,
    name: "Netflix",
    image: netflix,
  },
  {
    id: 2,
    name: "Amazon Prime Video",
    image: prime,
  },
  {
    id: 3,
    name: "Ivi",
    image: icon,
  },
];
