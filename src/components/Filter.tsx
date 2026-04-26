"use client";
import { Box, Typography, Button, Checkbox, FormControlLabel } from "@mui/material";
import { useState, useEffect } from "react";
import {Product} from "@/interfaces/Product";
const categories = ["Electronics", "Clothing", "Books", "Other"];

export default function Filter({ products, setProducts }: { products: Product[], setProducts: (products: Product[]) => void }) {
  const [originalProducts, setOriginalProducts] = useState<Product[]>([]);
  const [checkedCategory, setCheckedCategory] = useState<string | null>(null);

  useEffect(() => {
    if (originalProducts.length === 0 && products.length > 0) {
      setOriginalProducts(products);
    }
  }, [products, originalProducts.length]);

  const handleResetFilter = () => {
    setProducts(originalProducts);
    setCheckedCategory(null);
  };
  
  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setCheckedCategory(category);
      const filteredProducts = originalProducts.filter((product) =>
        product.category?.toLowerCase() === category.toLowerCase()
      );
      setProducts(filteredProducts);
    } else {
     
      console.log("Filter reset to show all products");
      console.log("Original products:", originalProducts);
      setCheckedCategory(null);
      setProducts(originalProducts);
    }
  }
  
  return (
    <Box sx={{ border: '1px solid #ccc', borderRadius: 1, p:3 ,minWidth: 200, height: 'fit-content' }}>
      <Typography variant="h6" gutterBottom>
        Filter
      </Typography>

      <Typography variant="body1">Category</Typography>

      <Box sx={{ display: "flex", flexDirection: "column", mt: 1 ,
         p: 2 }}>
        {categories.map((category) => (
          <FormControlLabel
            key={category.toLowerCase()}
            control={<Checkbox size="small" />}
            label={category}
            checked={checkedCategory === category}
            onChange={(e) => handleCategoryChange(category, (e.target as HTMLInputElement).checked)}
          />
        ))}
      </Box>

      <Button
        variant="contained"
        size="small"
        sx={{ mt: 2, textTransform: "none", fontWeight: "bold" }}
        onClick={handleResetFilter}
      >
        Reset Filter
      </Button>
    </Box>
  );
}