"use client";

import React from "react";

import Image from "next/image";
import book from "@images/book-1.jpg";

import Header from "../../globalSections/Header";
import { Button } from "@components";

import { Box, Grid, Stack, Typography } from "@mui/material";

import styles from "./styles";

const HomerHero = () => {
  return (
    <Box sx={{ ...styles.container, backgroundImage: "url(./author-bg.jpg)" }}>
      <Header />
      <Box py={10} sx={{ paddingInline: "200px" }}>
        <Grid container spacing={15} alignItems={"center"}>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <Image src={book} alt="Book Cover" style={styles.bookImage} />
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Stack
              sx={{ width: "100%" }}
              alignItems="center"
              justifyContent="center"
              spacing={2}
            >
              <Stack
                mb={5}
                pb={0.5}
                alignItems="center"
                sx={{ width: "145px", borderBottom: "3px solid #28bfab" }}
              >
                <Typography sx={{ fontWeight: "bold" }}>
                  Latest Release
                </Typography>
              </Stack>
              <Typography mt={10} variant="h3" sx={{ fontWeight: "bold" }}>
                Into The Wild
              </Typography>
              <Typography sx={{ textAlign: "center" }}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis Lorem ipsum dolor sit amet consectetuer.
              </Typography>
              <Typography sx={{ textAlign: "center" }}>
                "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo."
              </Typography>
              <Stack alignItems={"center"}>
                <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
                  Paulo Coello
                </Typography>
                <Typography>Author</Typography>
              </Stack>
              <Button text="$120 - Purchase Book" />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HomerHero;
