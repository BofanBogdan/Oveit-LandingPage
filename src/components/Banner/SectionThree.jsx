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
  CtaText,
} from "./SectionThree.style";

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
                  All-in-One Scanning and Badge Printing
                </Title>
                <Text variant="body1">Scan, Print, and Access Made Simple</Text>
                <Text variant="body1">
                  Welcome attendees with a quick scan and personalized badge.
                  Oveit’s solution provides both ticket scanning and on-demand
                  badge printing, all in one place
                </Text>
                <Text variant="body1">
                  Instant Ticket Scanning: Identify your guests in seconds.
                </Text>
                <Text variant="body1">
                  Fast Badge Printing: Print personalized badges that add a
                  professional touch.
                </Text>
                <Text variant="body1">
                  Access Control: Scan badges to verify attendee access rights,
                  benefits, or even collect leads.
                </Text>
                <CtaText variant="body1">
                  CTA: Streamline Your Event Check-In
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

export default LoginBanner;
