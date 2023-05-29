import React from "react";
import Link from "next/link";

// MUI
import { Box, Stack, Typography } from "@mui/material";

// Style
import styles from "./styles";

// Component
import Button from "../../Button";

const Header = () => {
  // Component
  const Navlink = ({ to, text }: { to: string; text: string }) => {
    return (
      <Link style={styles.navlink} href={to}>
        {text}
      </Link>
    );
  };

  return (
    <Box component="header" sx={styles.header}>
      <Typography sx={styles.logoText}>MARK BROWN</Typography>
      <Stack direction="row" alignItems="center" spacing={3}>
        <Stack direction="row" spacing={3} component="nav">
          <Navlink to="/" text="HOME" />
          <Navlink to="/" text="BOOKS" />
          <Navlink to="/" text="ABOUT ME" />
          <Navlink to="/" text="CONTACT" />
        </Stack>
        <Button text="buy-e-books" sx={{ height: "30px" }} />
      </Stack>
    </Box>
  );
};

export default Header;
