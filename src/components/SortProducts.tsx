"use client";

import { Box, Typography, Select, MenuItem } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import {Product} from "@/interfaces/Product";
import { useState } from "react";

const sortOptions = [
  { value: "low-high", label: "Price: Low to High" },
  { value: "high-low", label: "Price: High to Low" },
  { value: "rating", label: "Rating: High to Low" },
  { value: "newest", label: "Newest Arrivals" },
];
export default function SortProducts({ products, setProducts }: { products: Product[], setProducts: (products: Product[]) => void }) {
  const [sortValue, setSortValue] = useState("low-high");
 
  const handleSortChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setSortValue(value);
    let sortedProducts = [...products];

    switch (value) {
      case "low-high":
        sortedProducts.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case "high-low":
        sortedProducts.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case "rating":
        sortedProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "newest":
        sortedProducts.sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
        break;
      default:
        break;
    }

    setProducts(sortedProducts);
  };
 
 
  return (
    <Box sx={{ display: 'flex',  gap: 2, alignItems:'center' ,justifyContent:'right' , flexDirection:{xs:'column', md:'row'} }}>
      <Typography variant="h6" gutterBottom>
        Sort By
      </Typography>
      <Select value={sortValue} onChange={handleSortChange}>
        {sortOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}