import { Box, Typography, Button, Checkbox, FormControlLabel } from "@mui/material";

const categories = ["Electronics", "Fashion", "Home", "Sports"];

export default function Filter() {
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
            key={category}
            control={<Checkbox size="small" />}
            label={category}
          />
        ))}
      </Box>

      <Button
        variant="contained"
        size="small"
        sx={{ mt: 2, textTransform: "none", fontWeight: "bold" }}
      >
        Reset Filter
      </Button>
    </Box>
  );
}