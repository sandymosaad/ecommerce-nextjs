"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error("Product details page error:", error);
  }, [error]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        px: 2,
        background:
          "radial-gradient(circle at 20% 20%, rgba(255, 204, 204, 0.22), transparent 40%), radial-gradient(circle at 80% 75%, rgba(204, 229, 255, 0.2), transparent 45%)",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 560,
          p: { xs: 3, md: 5 },
          borderRadius: 4,
          border: "1px solid",
          borderColor: "divider",
          textAlign: "center",
          backdropFilter: "blur(2px)",
        }}
      >
        <ErrorOutlineRoundedIcon sx={{ fontSize: 56, color: "error.main", mb: 1 }} />
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Something Went Wrong
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          We could not load this product right now. Please try again.
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 1.5, flexWrap: "wrap" }}>
          <Button onClick={reset} variant="contained" size="large">
            Try Again
          </Button>
          <Button component={Link} href="/pages/products" variant="outlined" size="large">
            Browse Products
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
