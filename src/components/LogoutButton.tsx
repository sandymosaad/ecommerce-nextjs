"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", {
      method: "POST",
    });
    router.push('/')
    router.refresh(); 
  }

  return (
    <Button onClick={handleLogout} sx={{display: { xs: "none", sm: "flex" }}}>
      Logout
    </Button>
  );
}