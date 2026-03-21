import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import LinkComponent from "./LinkComponent";
import SearchBar from "./SearchBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { cookies } from "next/headers";
import LogoutButton from "./LogoutButton";
import logo from "../../public/logo.jpg"
import Image from "next/image"

export default async function Navbar() {
  const cookiesStore = await cookies()
  const token = cookiesStore.get("token")?.value;
  const name = cookiesStore.get("name")?.value;

 // console.log(token)
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

        <Box sx={{width: 500, mx: 2}}>
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
          <Button color="primary" component={LinkComponent} href="pages/profile" sx={{ display: "flex", gap: 2 }}>
            <PersonIcon/> 
             {name}  
          </Button>
          <LogoutButton/>
          </> }
          <Button color="primary" component={LinkComponent} href="/cart">
            <ShoppingCartIcon/>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}