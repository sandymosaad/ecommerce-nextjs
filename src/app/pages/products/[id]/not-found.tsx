import Link from "next/link";
import { Box, Button, Paper, Typography } from "@mui/material";
import SearchOffRoundedIcon from "@mui/icons-material/SearchOffRounded";

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        px: 2,
        background:
          "radial-gradient(circle at 10% 20%, rgba(255, 214, 165, 0.25), transparent 40%), radial-gradient(circle at 90% 80%, rgba(153, 204, 255, 0.18), transparent 45%)",
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
        <SearchOffRoundedIcon sx={{ fontSize: 56, color: "warning.main", mb: 1 }} />
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Product Not Found
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          The product link may be old, or the item is no longer available.
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 1.5, flexWrap: "wrap" }}>
          <Button component={Link} href="/pages/products" variant="contained" size="large">
            Browse Products
          </Button>
          <Button component={Link} href="/" variant="outlined" size="large">
            Back Home
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
