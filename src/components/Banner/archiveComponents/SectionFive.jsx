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
} from "./SectionFive.style";

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
                  Wireless Printing with Thermal Printers{" "}
                </Title>
                <Text variant="body1">Print On-The-Go, Cable-Free</Text>
                <Text variant="body1">
                  Say goodbye to tangled cables and complicated setups. Print
                  wirelessly with recommended thermal printers for a quick,
                  professional badge that’s ready in seconds
                </Text>
                <Text variant="body1">
                  Wireless Bluetooth or Wi-Fi Connections: Print badges
                  seamlessly on-site.
                </Text>
                <Text variant="body1">
                  Recommended Printer: The Brother QL-820NWB—perfect for fast,
                  high-resolution badge printing.
                </Text>
                <Text variant="body1">
                  Benefit: Hassle-free printing, anywhere.
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
