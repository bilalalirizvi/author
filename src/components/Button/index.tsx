import React from "react";
import { Button as MuiButton } from "@mui/material";

interface Props {
  text: string;
  sx?: React.CSSProperties;
}

const Button = ({ text, sx }: Props) => {
  return (
    <MuiButton
      variant="contained"
      sx={{
        borderRadius: "50px",
        fontWeight: 500,
        textTransform: "uppercase",
        color: "white",
        paddingInline: "35px",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: "primary.main",
          boxShadow: "none",
        },
        ...sx,
      }}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
