import { styled, Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

export const Banner = styled(Box)({
  backgroundColor: "#020612",
  paddingTop: "50px",
  paddingLeft: "100px",
  paddingRight: "100px",
});

export const Title = styled(Typography)({
  fontSize: "40px",
  color: "#EF047D",
  fontFamily: "Poppins",
  fontWeight: "bold",
  lineHeight: 1.25,
  paddingBottom: "20px",
});

export const Text = styled(Typography)({
  color: "white",
  fontFamily: "Poppins",
  fontSize: "20px",
  paddingBottom: "40px",
});

export const BoxGrid = styled(motion(Box))(({ theme }) => ({
  borderRadius: "16px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  alignItems: "center",
  justifyContent: "center",
  padding: "32px 16px",
  height: "200px",
}));

export const BoxWrite = styled(Box)(({ theme }) => ({
  textAlign: "center",
  maxWidth: "450px",
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

export const StyledImage = styled(motion.img)(({ theme }) => ({
  maxWidth: "50%",
  objectFit: "contain",
  filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.2))",
  border: "3px solid #EF047D",
  borderRadius: "20px",
  boxShadow: "0px 6px 20px rgba(255, 27, 167, 1)",
  border: "4px solid #EF047D",
}));

export const ImgGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
