import Image from "next/image";
import {
  Box,
  Typography,
  Button,
  Chip,
  Divider,
  Rating,
  Paper,
} from "@mui/material";
import { AddShoppingCart, LocalShipping, Replay, VerifiedUser } from "@mui/icons-material";
import { getProductById } from "@/services/productService";
import { notFound } from "next/navigation";
import { A } from "@faker-js/faker/dist/airline-Dz1uGqgJ";
import QuantitySelector from "@/components/QuantitySelector";

type PageProps = {
  params: {
    id: string;
  };
};
         {/* <Typography variant="body2" sx={{ display: "flex", gap: 1 }}>
                <LocalShipping fontSize="small" color="primary" sx={{px:1}} />
                Free shipping over $50
              </Typography>

              <Typography variant="body2" sx={{ display: "flex", gap: 1 }}>
                <Replay fontSize="small" color="primary" sx={{px:1}} />
                30-day return policy
              </Typography> */}

              // <Typography variant="body2" sx={{ display: "flex", gap: 1 }}>
              //   <VerifiedUser fontSize="small" color="primary" sx={{px:1}} />
              //   1 year warranty included
              // </Typography>
  const staticData = [{
    title:"Free shipping over $50",
    icon: LocalShipping
  },{
    title:"30-day return policy",
    icon: Replay
  },{
    title:"1 year warranty included",
    icon: VerifiedUser
  }]

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product || product.error) {
    notFound();
  }

  return (
    <Box sx={{ maxWidth: 1100, mx: "auto", mt: 15, p: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          {/* Image */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: { md: 600 },
              height: "auto",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Image
              src={product.images?.[0] || ""}
              alt={product.name}
              fill
              sizes="(max-width: 900px) 100vw, 600px"
              style={{ objectFit: "cover" }}
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {product.name}
            </Typography>

            <Typography variant="h5" color="primary" gutterBottom>
              ${product.price}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <Rating value={product.rating || 0} precision={0.5} readOnly />
              <Typography variant="body2">
                ({product.rating || 0})
              </Typography>
            </Box>

            <Chip
              label={
                product.stock > 0
                  ? `In Stock (${product.stock})`
                  : "Out of Stock"
              }
              color={product.stock > 0 ? "success" : "error"}
              sx={{ mb: 2 }}
            />

            <Divider sx={{ my: 2 }} />

            <Typography variant="body1" sx={{ mb: 3 }}>
              {product.description}
            </Typography>

            <Box sx={{ display: "flex", gap: 2, mb: 3 }}>

              <QuantitySelector/>
           

              <Button variant="outlined" startIcon={<AddShoppingCart />}
                disabled={product.stock === 0}>Add to Cart</Button>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {staticData.map((item, index) => (
                  <Typography variant="body2" sx={{ display: "flex", gap: 1 }} key={index}>
                    <item.icon fontSize="small" color="primary" sx={{px:1}} />
                    {item.title}
                  </Typography>
                ))}
            </Box>
          </Box>
        </Box>
    </Box>
  );
}