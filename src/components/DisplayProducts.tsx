"use client";

import { Box, ImageList, useMediaQuery, useTheme, Pagination, Stack } from "@mui/material";
import FeaturedAndTrendingCard from "./FeaturedAndTrendingCard";
import SortProducts from "./SortProducts";
import { getProducts } from "@/services/productService";
import { useEffect, useState } from "react";
import {Product} from "@/interfaces/Product";

export default function DisplayProducts() {
   const theme = useTheme();
    
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // < 600px
    const isTablet = useMediaQuery(theme.breakpoints.down('md')); // < 900px
    const cols = isMobile ? 1 : isTablet ? 2 : 4;

    const [products, setProducts] = useState<Product[]>([]);
      const [page, setPage] = useState(1);
      const itemsPerPage = 8;

    useEffect(() => {
        async function fetchProducts() {
            const data = await getProducts();
            setProducts(data || []);
        }
        fetchProducts();
    }, []);

  const startIndex = (page - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
    return <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' , gap:4 }}>
        <SortProducts products={products} setProducts={setProducts}/>

      <ImageList sx={{ gap: 24, width: '100%' }} cols={cols}>
            {currentProducts.map((item, index) => (
              (
                <FeaturedAndTrendingCard 
                  key={item._id || index} 
                  item={{ img: item.images[0], title: item.name, rate: item.rating || 0, price: item.price || 0 }} 
                />
              ) 
            ))}
      </ImageList>

      {products.length > itemsPerPage && (
        <Stack alignItems="center" mt={2}>
          <Pagination
            count={Math.ceil(products.length / itemsPerPage)}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </Stack>
      )}
   </Box>
}

  