import { Box, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'rgba(19, 18, 18, 0.04)',
        borderRadius: 1,
        width: '100%',
        maxWidth: 500,
        padding: '2px 8px',
      }}
    >
      <IconButton sx={{ p: 0.5 }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        sx={{ ml: 1, flex: 1 }}
      />
    </Box>
  );
}