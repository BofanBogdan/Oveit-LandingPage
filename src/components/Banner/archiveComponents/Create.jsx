import React from "react";
import BannerPng from "../../assets/App Create.png";
import { Box, Grid, } from "@mui/material";
import {
  Banner,
  Text,
  Title,
  BoxGrid,
  BoxWrite,
  StyledImage,
  ImgGrid,
} from "./Create.style";

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
                  Create your Badge{" "}
                </Title>
                <Text variant="body1">
                  Our innovative app allows you to create personalized badges
                  based on your desired access type: general or VIP. General
                  badges are ideal for regular users, providing access to basic
                  features, while VIP badges unlock exclusive doors and special
                  privileges. This way, each badge becomes a symbol of your
                  access level and achievements!
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

export default Banner2;
