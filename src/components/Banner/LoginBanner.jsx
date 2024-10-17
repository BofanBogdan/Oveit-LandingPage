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
} from "./LoginBanner.style";

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
                  Protected Login: Security at Every Step{" "}
                </Title>
                <Text variant="body1">
                  The login page of our application is designed to ensure quick
                  and secure access to the reserved area. Users enter their
                  email and password, and this information is validated to check
                  the correctness of the entered data. Users can have different
                  roles, and access is restricted based on these roles; for
                  example, event check-in staff have limited access. In case the
                  user forgets their password, there is a "Forgot Password"
                  option to request a recovery link. After entering the email,
                  the server checks its existence and sends instructions for
                  resetting the password, providing feedback to the user through
                  success or error messages. Additionally, users can easily log
                  out of the application using a logout button.
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
