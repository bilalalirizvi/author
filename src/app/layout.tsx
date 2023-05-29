"use client";

// Global Css
import "../styles/global.css";

// Font
import { Poppins } from "next/font/google";

// Mui
import { ThemeProvider, CssBaseline } from "@mui/material";

// Theme
import theme from "@utils/theme";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// export const metadata = {
//   title: "E-Books",
//   description: "This is a E-Books Website.",
// };

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body suppressHydrationWarning={true} className={poppins.className}>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
};

export default RootLayout;
