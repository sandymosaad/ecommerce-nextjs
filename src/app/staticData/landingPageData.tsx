import { ReactNode } from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StarIcon from '@mui/icons-material/Star';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export interface Feature {
  icon: ReactNode;
  title: string;
  desc: string;
  bgColor: string;
  iconColor: string;
}

export interface Product {
  id?: number;
  img: string;
  title: string;
  category?: string;
  rate?: number;
  price?: string;
}

const categoriesData: { img: string; title: string; category: string }[] = [
  { img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d', title: 'Burger', category: 'Sports' },
  { img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45', title: 'Camera', category: 'Home-Living' },
  { img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c', title: 'Coffee', category: 'Electronics' },
  { img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8', title: 'Hats', category: 'Fashion' },
];
const featuredProducts: Product[] = [
  { img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d', title: 'Burger', rate: 4.5, price: '$12.99' , id:1 },
  { img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45', title: 'Camera', rate: 4.2, price: '$15.99' , id:2 },
  { img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c', title: 'Coffee', rate: 4.1, price: '$3.99' , id:3 },
  { img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8', title: 'Hats', rate: 4.0, price: '$8.99' , id:4 },
  { img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d', title: 'Burger', rate: 4.5, price: '$12.99' , id:5 },
  { img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45', title: 'Camera', rate: 4.2, price: '$15.99' , id:6 },
  { img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c', title: 'Coffee', rate: 4.1, price: '$3.99' , id:7 },
  { img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8', title: 'Hats', rate: 4.0, price: '$8.99' , id:8},

];
const trendingProducts: Product[] = [
  { img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d', title: 'Burger', rate: 4.5, price: '$12.99' , id:1 },
  { img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45', title: 'Camera', rate: 4.2, price: '$15.99' , id:2 },
  { img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c', title: 'Coffee', rate: 4.1, price: '$3.99' , id:3 },
  { img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8', title: 'Hats', rate: 4.0, price: '$8.99' , id:4 },
];

const features: Feature[] = [
    {
      icon: <LocalShippingIcon />,
      title: "Free Shipping",
      desc: "On orders over $50",
      bgColor: '#c3e5fd', 
      iconColor: '#1976d2',
    },
    {
      icon: <StarIcon />,
      title: "Quality Products",
      desc: "Guaranteed satisfaction",
      bgColor: '#fdf0c6', 
      iconColor: '#ffa000',
    },
    {
      icon: <SupportAgentIcon />,
      title: "24/7 Support",
      desc: "We're here to help",
      bgColor: '#e5fce7', 
      iconColor: '#2e7d32',
    },
  ];
export { categoriesData, featuredProducts, trendingProducts, features };
