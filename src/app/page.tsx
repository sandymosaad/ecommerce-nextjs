import HeroHome from "@/components/HeroHome";
import ShopCategories from "@/components/ShopCategories";
import { categoriesData , featuredProducts, trendingProducts } from "./staticData/landingPageData";
import StarIcon from '@mui/icons-material/Star'; 
import { TrendingDown } from "@mui/icons-material";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return <>
      <HeroHome/>
      <ShopCategories customComponent={"ImageListItemCard"} itemData={categoriesData} title="Shop by Category"/>
      <ShopCategories customComponent={"FeaturedCard"} itemData={featuredProducts} 
      title={<><StarIcon sx={{ fontSize: 35, color: '#ffc107' }} /> Featured Products</>}
      />
      <ShopCategories customComponent={"FeaturedCard"} itemData={trendingProducts} title={<><TrendingDown sx={{ fontSize: 35, color: '#ffc107' }} /> Trending Products</>}  />
      <Features/>
      <Footer/>
    </>;
}
