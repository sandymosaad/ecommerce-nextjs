"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import { updateUser } from "@/services/userService";

interface Props {
  open: boolean;
  handleClose: () => void;
  user?: any; // mongoose-lean user object
  onSaved?: (user: any) => void;
}

function EditUserInfo({ open, handleClose, user, onSaved }: Props) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (user) {
      setForm({ name: user.name || "", email: user.email || "", phone: user.phone || "" });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (!user?._id && !user?.id) {
      handleClose();
      return;
    }

    setSaving(true);
    try {
      const id = user._id || user.id;
      const updated = await updateUser(id.toString(), form);
      onSaved?.(updated);
      handleClose();
    } catch (err) {
      console.error("Failed to save user info", err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit Personal Information</DialogTitle>

      <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
        <TextField label="Name" name="name" value={form.name} onChange={handleChange} fullWidth />

        <TextField label="Email" name="email" value={form.email} onChange={handleChange} fullWidth />

        <TextField label="Phone" name="phone" value={form.phone} onChange={handleChange} fullWidth />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} disabled={saving}>
          Cancel
        </Button>
        <Button variant="contained" onClick={handleSave} disabled={saving}>
          {saving ? "Saving..." : "Save"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditUserInfo;