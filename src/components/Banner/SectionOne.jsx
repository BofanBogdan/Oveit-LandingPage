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
  ImgGrid,
} from "./SectionOne.style";

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
                  Connected to Oveit Ticketing and Registration{" "}
                </Title>
                <Text variant="body1">
                  One Connected System for Effortless Check-Ins
                </Text>
                <Text variant="body1">
                  When your guests register, their details automatically sync
                  with our badge printing and check-in platform. It’s all
                  connected—ticketing, registration, and now, on-the-spot badge
                  printing. Forget manual data entry and let Oveit handle the
                  details for you.
                </Text>
                <Text variant="body1">
                  Benefits: Automated attendee data | Real-time updates |
                  Effortless integrations
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
