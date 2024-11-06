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
} from "./SectionSix.style";

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
                  Secure Logins with Role-Based Access
                </Title>
                <Text variant="body1">
                  Manage Access for Organizers and Check-In Staff
                </Text>
                <Text variant="body1">
                  Oveit ensures a secure login system with tiered access.
                  Account owners have full access to create and design badges,
                  while check-in staff can simply scan and print, managing
                  visitors without design access.
                </Text>
                <Text variant="body1">
                  Credential-Based Logins: For data security.
                </Text>
                <Text variant="body1">
                  Role-Based Permissions: Owners design, staff check in.
                </Text>
                <Text variant="body1">
                  Assigned Event Access: Staff only access events assigned to
                  them.{" "}
                </Text>
                <CtaText>
                  CTA: Control Your Check-In Process with Confidence
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
