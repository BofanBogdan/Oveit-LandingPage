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
} from "./SectionEight.style";

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
                  Easy Scanning and Manual Entry Options
                </Title>
                <Text variant="body1">Capture Every Guest’s Details</Text>
                <Text variant="body1">
                  Whether using the device camera or entering codes manually,
                  you have flexible check-in options.
                </Text>
                <Text variant="body1">
                  Scan with Camera: Quickly identify attendees with a simple
                  scan.
                </Text>
                <Text variant="body1">
                  Manual Code Entry: Ideal for troubleshooting or when scanning
                  isn’t an option.
                </Text>
                <Text variant="body1">
                  Benefit: Adapt to each guest’s needs for smoother entry.
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
