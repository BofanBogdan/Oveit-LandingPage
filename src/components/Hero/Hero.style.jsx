import { Box, Typography, styled, Container, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";

export const HeroBox = styled(Box)({
  backgroundColor: "#020612",
  color: "#fff",
  overflow: "hidden",
  position: "relative",
});

export const HeroContainer = styled(Container)({
  maxWidth: "lg",
  minHeight: "650px",
  paddingBottom: "80px",
});

export const AppTypography = styled(Typography)({
  fontWeight: "bold",
  lineHeight: "1.2",
  marginBottom: "32px",
  fontFamily: "Poppins,",
});

export const AppTypographyTitle = styled(Typography)({
  color: "#EF047D",
  fontWeight: "bold",
  fontFamily: "Poppins,",
});

export const BrandGrid = styled(Grid)({
  paddingTop: "56px",
  paddingBottom: "56px",
  zIndex: 20,
  "@media (min-width: 960px)": {
    paddingTop: "0px",
    paddingBottom: "0px",
  },
});

export const BrandBox = styled(Box)({
  textAlign: "center",
  maxWidth: "400px",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "30px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "@media (min-width: 960px)": {
    textAlign: "left",
    marginLeft: "0",
    marginRight: "0",
  },
});

export const ButtonHero = styled(Button)({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  fontFamily: "Poppins, sans-serif",
  backgroundColor: "#EF047D",
  transition: "box-shadow 0.3s ease",
  fontFamily: "Poppins,",
  fontWeight: "bold",

  boxShadow: "none",
  "&:hover": {
    boxShadow: "0px 6px 20px rgba(239, 4, 125, 1)",
  },
});

export const HeroImageGrid = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  position: "relative",
  marginTop: "16px",
  "& img": {
    border: "4px solid #EF047D",
    borderRadius: "20px",
    boxShadow: "0px 6px 20px rgba(255, 27, 167, 1)",
  },
});
