import React from "react";
import BannerPng from "../../assets/App Scan.jpg";
import { Box, Grid } from "@mui/material";
import {
  Banner,
  Text,
  Title,
  BoxGrid,
  BoxWrite,
  StyledImage,
  ImgGrid,
} from "./Scan.style";

const Scan = () => {
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
                  Choose Your Method: Scan or Enter the Code!
                </Title>
                <Text variant="body1">
                  Our application offers an intuitive feature to facilitate
                  quick access by scanning the QR code using your device's
                  camera. All you need to do is point the camera at the QR code,
                  and the application will automatically detect and record the
                  information. Additionally, for users who prefer to enter the
                  code manually, the application provides the option to find the
                  ticket directly by inputting the code. This method is ideal
                  for devices that do not have the capability to scan QR codes
                  or in situations where the camera is unavailable.
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

export default Scan;
