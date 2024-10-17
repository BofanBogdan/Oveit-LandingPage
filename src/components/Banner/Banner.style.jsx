import { styled, Box, Typography, Container, Paper } from "@mui/material";
import { motion } from "framer-motion";

export const BannerSection = styled(Box)({
  backgroundColor: "#020612",
});

export const BannerContainer = styled(Container)({
  paddingTop: "150px",
  paddingBottom: "150px",
  "@media (min-width:600px)": {
    paddingTop: "200px",
    paddingBottom: "200px",
    paddingLeft: "100px",
    paddingRight: "100px",
  },
});

export const FunctioName = styled(Typography)({
  fontSize: "auto",
});

export const FunctionsBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "40px",
});

export const Title = styled(Typography)({
  fontSize: "60px",
  color: "white",
  fontFamily: "Poppins",
  fontWeight: "bold",
  lineHeight: 1.25,
  padding: "20px",
});

export const StyledPaper = styled(Paper)({
  width: "200px",
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 2,
  padding: "24px",
  borderRadius: "14px",
  color: "white",
  backgroundColor: "#EF047D",
  "&:hover": { boxShadow: "0px 6px 20px rgba(239, 4, 125, 1)" },
});

export const MotionDiv = styled(motion.div)({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  marginBottom: "16px",
});

export const ImgBox = styled(motion.img)({
  maxWidth: "60%",
  objectFit: "cover",
  filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.5))",
  boxShadow: "0px 6px 20px rgba(255, 27, 167, 1)",
  border: "4px solid #EF047D",
  borderRadius: "20px",
  "@media (max-width: 901px)": {
    display: "none",
  },
});
