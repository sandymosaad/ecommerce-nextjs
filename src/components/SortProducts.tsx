import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
} from "@mui/material";
const sortOptions = [
  { value: "low-high", label: "Price: Low to High" },
  { value: "high-low", label: "Price: High to Low" },
  { value: "rating", label: "Rating: High to Low" },
  { value: "newest", label: "Newest Arrivals" },
];
export default function SortProducts() {
  return (
    <Box sx={{ display: 'flex',  gap: 2, alignItems:'center' ,justifyContent:'right' , flexDirection:{xs:'column', md:'row'} }}>
      <Typography variant="h6" gutterBottom>
        Sort By
      </Typography>
      <Select defaultValue="low-high">
        {sortOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}