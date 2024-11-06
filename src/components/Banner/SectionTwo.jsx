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
} from "./SectionTwo.style";

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
                  Designed for Mobile and PC{" "}
                </Title>
                <Text variant="body1">Flexibility for Any Setup</Text>
                <Text variant="body1">
                  Whether you’re on a mobile device or a PC, Oveit’s badge
                  printing works wherever you do. Scan tickets, print badges,
                  and manage your check-in flow without being tied to a specific
                  device.
                </Text>
                <Text variant="body1">
                  Mobile Optimized: Check-in staff can scan and print directly
                  from their smartphones or tablets.
                </Text>
                <Text variant="body1">
                  PC Compatible: Set up larger check-in stations for busy events
                  and ensure smooth attendee flow.
                </Text>
                <Text variant="body1">
                  Benefit: Choose the setup that best fits your event.{" "}
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
