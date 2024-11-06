import React from "react";
import BannerPng from "../../assets/App Login.png";
import { Box, Grid } from "@mui/material";
import {
  Banner,
  Text,
  Title,
  BoxGrid,
  BoxWrite,
  StyledImage,
  ImgGrid,
} from "./SectionFour.style";

const LoginBanner = () => {
  return (
    <Banner>
      <Box sx={{ py: { xs: 12, md: 24 } }}>
        <Grid
          container
          spacing={20}
          justifyContent="center"
          alignItems="center"
        >
          {/* Banner Text */}
          <Grid item xs={12} md={6}>
            <BoxGrid
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <BoxWrite>
                <Title variant="h4" component="h1">
                  Easy, Personalized Badge Design
                </Title>
                <Text variant="body1">Create Badges That Match Your Brand</Text>
                <Text variant="body1">
                  Your badges should reflect your event. With Oveit’s badge
                  designer, add custom fields, adjust fonts, and even include QR
                  codes—all synced to your ticketing data.
                </Text>
                <Text variant="body1">
                  Drag-and-Drop Design: Simple tools to personalize badges.
                </Text>
                <Text variant="body1">
                  QR Codes: Enable instant check-ins and access.
                </Text>
                <Text variant="body1">
                  Flexible Layouts: Adapt to fit the information you need.
                </Text>
                <Text variant="body1">
                  Benefit: Effortless, branded badge designs.
                </Text>
              </BoxWrite>
            </BoxGrid>
          </Grid>
          {/* Banner Image */}
          <ImgGrid item xs={12} md={6}>
            <StyledImage
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              src={BannerPng}
              alt=""
            />
          </ImgGrid>
        </Grid>
      </Box>
    </Banner>
  );
};

export default LoginBanner;
