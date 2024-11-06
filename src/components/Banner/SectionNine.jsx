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
} from "./SectionNine.style";

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
                  Edit and Synchronize Visitor Details
                </Title>
                <Text variant="body1">Keep Attendee Data Accurate </Text>
                <Text variant="body1">
                  If guest details need updating or have errors, make edits
                  on-site that sync across Oveit, so future visits or reports
                  stay accurate.
                </Text>
                <Text variant="body1">
                  On-Site Data Editing: Correct names, affiliations, or other
                  fields as needed.{" "}
                </Text>
                <Text variant="body1">
                  Automatic Syncing: Updated information reflects immediately
                  across the platform.{" "}
                </Text>
                <Text>
                  Improved Visitor Experience: Attendees feel welcomed and
                  valued.
                </Text>
                <Text>
                  Benefit: Consistent, accurate records for smooth event
                  management.
                </Text>
                <CtaText>
                  Final CTA: Get Started with Oveit’s Personalized Badge
                  Solution Today!{" "}
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
