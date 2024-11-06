import React from "react";
import BannerPng from "../../assets/App Print.jpg";
import { Box, Grid } from "@mui/material";
import {
  Banner,
  Text,
  Title,
  BoxGrid,
  BoxWrite,
  StyledImage,
  ImgGrid,
} from "./Print.style";

const Print = () => {
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
                  Print Your personal pass
                </Title>
                <Text variant="body1">
                  Here’s the translation of your text into English: Once you
                  have customized your ticket to your liking, you have the
                  option to print it, preserving all the changes you made. This
                  means that your unique design and preferred fonts will be
                  accurately reproduced on the printed ticket. Thus, you can
                  enjoy a ticket that not only reflects your personality but is
                  also perfectly prepared to be used at your events!
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

export default Print;
