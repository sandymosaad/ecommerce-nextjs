export const theme = {
  // ---------------- Colors ----------------
  colors: {
    primary: "#0070f3",        // main brand color
    secondary: "#ff4081",      // accent color
    background: "#f5f5f5",     // page background
    surface: "#ffffff",        // card, container background
    textPrimary: "#333333",    // main text
    textSecondary: "#666666",  // secondary text
    error: "#ff1744",          // error messages
    success: "#00c853",        // success messages
    warning: "#ffab00",        // warning messages
    info: "#2196f3",           // info messages
    border: "#e0e0e0"          // borders, dividers
  },

  // ---------------- Font Sizes ----------------
  fontSizes: {
    xs: "0.75rem",   // 12px
    sm: "0.875rem",  // 14px
    md: "1rem",      // 16px
    lg: "1.25rem",   // 20px
    xl: "1.5rem",    // 24px
    xxl: "2rem"      // 32px
  },

  // ---------------- Font Weights ----------------
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700
  },

  // ---------------- Spacing ----------------
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px"
  },

  // ---------------- Border Radius ----------------
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    round: "50%"
  },

  // ---------------- Buttons ----------------
  button: {
    padding: "0.75rem 1.5rem",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: 500,
    primary: {
      background: "#0070f3",
      color: "#ffffff",
      hover: "#005bb5"
    },
    secondary: {
      background: "#ff4081",
      color: "#ffffff",
      hover: "#f50057"
    }
  },

  // ---------------- Inputs ----------------
  input: {
    padding: "0.75rem 1rem",
    borderRadius: "8px",
    borderColor: "#e0e0e0",
    focusBorderColor: "#0070f3",
    fontSize: "1rem"
  },

  // ---------------- Alerts ----------------
  alert: {
    success: {
      background: "#e0f2f1",
      text: "#00c853"
    },
    error: {
      background: "#ffebee",
      text: "#ff1744"
    },
    warning: {
      background: "#fff8e1",
      text: "#ffab00"
    },
    info: {
      background: "#e3f2fd",
      text: "#2196f3"
    }
  }
};