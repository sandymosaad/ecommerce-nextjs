import { AppBar, Toolbar, Typography, Button, Box, Stack } from "@mui/material";
import LinkComponent from "./LinkComponent";
import SearchBar from "./SearchBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import LogoutButton from "./LogoutButton";
import logo from "../../public/logo.jpg"
import Image from "next/image"
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import menuItems from "@/app/staticData/menuItems";

export default function Navbar({ token, name, onMenuClick }: { token?: string, name?: string, onMenuClick: () => void }) {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'white', color: 'black' }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>       
        <LinkComponent href="/" style={{ textDecoration: "none" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image src={logo} alt="logo" width={80} quality={100} />
            <Typography color="primary" variant="h6">
              MyApp
            </Typography>
          </Box>
        </LinkComponent>

        <Box sx={{width: 500, mx: 2, display: { xs: "none", sm: "block" }}}>
          <SearchBar />
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
            {!token &&
            <Button color="primary" component={LinkComponent} href="pages/login" sx={{ display: "flex", gap: 2 }}>
              <PersonIcon/> 
              Login 
            </Button>
            }
          {token &&<>
          <Button color="primary" component={LinkComponent} 
          href="/pages/profile" 
          sx={{  gap: 2 , display: { xs: "none", sm: "flex" }}}>
            <PersonIcon/> 
             {name}  
          </Button>
          <LogoutButton/>
          </> }
          <Button color="primary" component={LinkComponent}
           href="/cart">
            <ShoppingCartIcon/>
          </Button>
          <IconButton
            color="primary"
            edge="start"
            onClick={onMenuClick}
            sx={{ display: { xs: 'flex', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Stack direction="row" spacing={2} sx={{ml:4 , display: { xs: "none", sm: "flex" }, alignItems: "center" }}>
      {menuItems.map((item) => (
        <Button key={item.label} component={LinkComponent} href={item.href} color="primary">
          {item.label}
        </Button>
      ))}
      </Stack>
    </AppBar>
  );
}