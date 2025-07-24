import { StaticImageData } from "next/image";
export type Review = {
  user: string;
  review: string;
  score: number;
};

export type ServiceData = {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
};
