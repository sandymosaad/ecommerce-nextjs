'use client';
import { useState } from 'react';
import Navbar from './Navbar';
import DrawerComponent from './Drawer';

export default function NavbarWrapper({ token, name }: { token?: string, name?: string }) {
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