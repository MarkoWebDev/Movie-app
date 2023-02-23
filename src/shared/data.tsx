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
