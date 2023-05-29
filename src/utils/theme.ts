"use client";

import { Poppins } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

declare module "@mui/material/styles" {
  interface PaletteOptions {
    bgColor: PaletteOptions["primary"];
  }
  interface SimplePaletteColorOptions {
    gray?: string;
  }
}
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#28bfab",
    },
    secondary: {
      main: "#304a68",
    },
    error: {
      main: red.A400,
    },
    bgColor: {
      main: "#fff",
      gray: "#F5F5F5",
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
});

export default theme;
