
export type ProductData = {
  id: number;
  title: string;
  image: string;
  shortDescription: string;
  description: string;
  price: number;
  salesPrice: number;
  size: string[];
  images: Images;
  colors: Color[];
  rating: number;
  sku: string;
  category: string;
  tags: string[];
  share: Share[];
}[]

type Images =  {
  mainImage: string;
  gallery: string[];
}

type Color = {
  name: string;
  hex: string;
}

type Share = {
  facebookUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
}
