import React from "react";
import BannerPng from "../../assets/badgeapp.jpg";
import { Box, Grid } from "@mui/material";
import {
  Banner,
  Text,
  Title,
  BoxGrid,
  BoxWrite,
  StyledImage,
  ImgGrid,CtaText,
} from "./HeroCheckin.style";

const Banner2 = () => {
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
                  Seamlessly Connect, Scan, and Print
                </Title>
                <Text variant="body1">
                  Oveit’s personalized badge solution transforms your check-in
                  experience into something seamless and smart. Fully integrated
                  with Oveit’s ticketing and registration, it makes creating,
                  scanning, and printing badges easier than ever. Welcome your
                  guests in style—whether you’re using mobile or PC.
                </Text>
                <CtaText variant="body1">
                  CTA: Get Started with Oveit Badge Printing
                </CtaText>
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

export default Banner2;
