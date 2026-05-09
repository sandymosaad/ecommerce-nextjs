"use client";

import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";

import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import PaperComponent from "./PaperComponent";
import { User } from "@/interfaces/User";
import { useState, useEffect } from "react";
import { updateUser } from "@/services/userService";

export default function AddressCard({ user }: { user: User | null }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ street: "", city: "", state: "", zip: "", country: "", phone: "" });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (user) {
      setForm({
        street: user.street || "",
        city: user.city || "",
        state: user.state || "",
        zip: user.zip || "",
        country: user.country || "",
        phone: user.phone || "",
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (!user?._id && !user?.id) {
      setOpen(false);
      return;
    }
    setSaving(true);
    try {
      const id = user._id || user.id;
      await updateUser(id.toString(), form);
      setOpen(false);
      if (typeof window !== "undefined") window.location.reload();
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <PaperComponent>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h4" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <LocationOnIcon /> Address
        </Typography>

        <Button startIcon={<AddIcon />} onClick={() => setOpen(true)}>
          {user?.street ? "Edit" : "Add New"}
        </Button>
      </Box>
      <Box sx={{ mt: 2, backgroundColor: "#f5f5f5", p: 2, borderRadius: 2 }}>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">{user?.name}</Typography>
          {user?.street && <EditIcon onClick={() => setOpen(true)} />}
        </Box>

        <Box>
          {!user?.street && (
            <Typography variant="h6" color="text.secondary">
              No address added yet.
            </Typography>
          )}

          {user?.street && (
            <>
              <Typography variant="h6" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocationOnIcon /> {user.street}
              </Typography>

              <Typography variant="h6">
                {user.city}, {user.state} {user.zip}
              </Typography>
            </>
          )}

          {user?.phone && (
            <Typography variant="h6" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CallIcon /> {user.phone}
            </Typography>
          )}
        </Box>
      </Box>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>{user?.street ? "Edit Address" : "Add Address"}</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField label="Street" name="street" value={form.street} onChange={handleChange} fullWidth />
          <TextField label="City" name="city" value={form.city} onChange={handleChange} fullWidth />
          <TextField label="State" name="state" value={form.state} onChange={handleChange} fullWidth />
          <TextField label="Zip" name="zip" value={form.zip} onChange={handleChange} fullWidth />
          <TextField label="Country" name="country" value={form.country} onChange={handleChange} fullWidth />
          <TextField label="Phone" name="phone" value={form.phone} onChange={handleChange} fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} disabled={saving}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSave} disabled={saving}>
            {saving ? "Saving..." : "Save"}
          </Button>
        </DialogActions>
      </Dialog>
    </PaperComponent>
  );
}