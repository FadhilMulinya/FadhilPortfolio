import { StaticImageData } from "next/image";

export type Product = {
  href: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  stack: string[];
  slug: string;
  content: JSX.Element;
};
