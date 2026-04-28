'use client';
import { useState } from 'react';
import Navbar from './Navbar';
import DrawerComponent from './Drawer';
import { useUserContext } from "@/context/UserContext";

interface userContextType {
  token: string | null;
  name: string | null;
}
export default function NavbarWrapper(
 // { token, name }: { token?: string, name?: string }
) {
  const { token, name }:userContextType = useUserContext();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <>
      <Navbar token={token} name={name} onMenuClick={handleDrawerToggle} />
      <DrawerComponent
        token={token}
        name={name}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
    </>
  );
}