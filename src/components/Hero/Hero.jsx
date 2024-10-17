import React from "react";
import Navbar from "../Navbar/Navbar";
import {
  AppTypography,
  AppTypographyTitle,
  HeroBox,
  HeroContainer,
  BrandGrid,
  BrandBox,
  ButtonHero,
  HeroImageGrid,
} from "./Hero.style";
import HeroPng from "../../assets/App preview.png";
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid2";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  return (
    <HeroBox>
      <Navbar />
      <HeroContainer>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          {/* Brand Info */}
          <BrandGrid>
            <BrandBox>
              <motion.div
                variants={FadeUp(0.6)}
                initial="initial"
                animate="animate"
              >
                <AppTypography variant="h3" component="h1">
                  Welcome to the new{" "}
                  <AppTypographyTitle variant="h3" component="h1">
                    Badge Scan App
                  </AppTypographyTitle>
                  from Oveit
                </AppTypography>
              </motion.div>
              <motion.div
                variants={FadeUp(0.8)}
                initial="initial"
                animate="animate"
              >
                <ButtonHero
                  variant="contained"
                  endIcon={<SendRoundedIcon className="text-xl" />}
                >
                  Badge APP
                </ButtonHero>
              </motion.div>
            </BrandBox>
          </BrandGrid>

          {/* Hero Image */}
          <HeroImageGrid item xs={12} md={6}>
            <motion.img
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
              src={HeroPng}
              alt="Hero"
              style={{ width: "300px", maxWidth: "80%", zIndex: 10 }}
            />
          </HeroImageGrid>
        </Grid>
      </HeroContainer>
    </HeroBox>
  );
};

export default Hero;
