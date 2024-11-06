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
} from "./SectionSeven.style";

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
                  Create the Badge Design
                </Title>
                <Text variant="body1">
                  Design With Ease—A Badge as Unique as Your Event
                </Text>
                <Text variant="body1">
                  Add the fields you need and position elements as you want. Our
                  badge design tool makes it easy to create visually appealing
                  badges that suit your event’s identity.
                </Text>
                <Text variant="body1">
                  Simple Design Interface: Drag and drop elements into place.
                </Text>
                <Text variant="body1">
                  Add Key Data: Name, company, and more, directly from
                  registration data.{" "}
                </Text>
                <Text variant="body1">
                  QR Code Support: Scan and access control all in one.
                </Text>
                <Text variant="body1">
                  Benefit: Design badges that stand out.{" "}
                </Text>{" "}
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
