'use client';
import { Box, List, ListItem, ListItemButton, Drawer, Typography } from "@mui/material";
import LinkComponent from "./LinkComponent";
import LogoutButton from "./LogoutButton";
import SearchBar from "./SearchBar";
import menuItems from "@/app/staticData/menuItems";

export default function DrawerComponent({
  mobileOpen,
  handleDrawerToggle,
  token,
  name
}: {
  mobileOpen: boolean,
  handleDrawerToggle: () => void,
  token?: string,
  name?: string,
}) {
  return (
    <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
      <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
        <Box sx={{ width: 200, mx: 2, my: 2 }}>
          <SearchBar />
        </Box>

        <List>
          {menuItems.map(item => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component={LinkComponent}
                href={item.href}
                sx={{ color: 'primary.main' }} // <-- primary color here
              >
                {item.label}
              </ListItemButton>
            </ListItem>
          ))}

          {!token && (
            <ListItem disablePadding>
              <ListItemButton component={LinkComponent} href="/pages/login" sx={{ color: 'primary.main' }}>
                Login
              </ListItemButton>
            </ListItem>
          )}

          {token && (
            <>
              <ListItem disablePadding>
                <ListItemButton component={LinkComponent} href="/pages/profile" sx={{ color: 'primary.main' }}>
                  {name}
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <LogoutButton />
              </ListItem>
            </>
          )}
        </List>
      </Box>
    </Drawer>
  );
}