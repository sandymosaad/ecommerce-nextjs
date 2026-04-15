import HeroHome from "@/components/HeroHome";
import LandingPageCategories from "@/components/LandingPageCategories";
import { categoriesData , featuredProducts, trendingProducts } from "./staticData/landingPageData";
import StarIcon from '@mui/icons-material/Star'; 
import { TrendingDown } from "@mui/icons-material";
import Features from "@/components/Features";

export default function Home() {
  return <>
      <HeroHome/>
      <LandingPageCategories customComponent={"ImageListItemCard"} itemData={categoriesData} title="Shop by Category"/>
      <LandingPageCategories customComponent={"FeaturedAndTrendingCard"} itemData={featuredProducts} 
      title={<><StarIcon sx={{ fontSize: 35, color: '#ffc107' }} /> Featured Products</>}
      />
      <LandingPageCategories customComponent={"FeaturedAndTrendingCard"} itemData={trendingProducts} title={<><TrendingDown sx={{ fontSize: 35, color: '#ffc107' }} /> Trending Products</>}  />
      <Features/>
      
    </>;
}
