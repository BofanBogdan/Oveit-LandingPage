import { styled, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export const ServicesSection = styled(Box)({
  backgroundColor: "#020612",
  py: 4,
  color: "#EF047D",
});

export const IconsBox = styled(Box)({
  color: "#EF047D",
});

export const ServicesBox = styled(Box)({
  paddingTop: "20x",
  paddingBottom: "40px",
});

export const Title = styled(Typography)({
  fontWeight: "bold",
  alignItems: "left",
  paddingBottom: "40px",
});

export const Servicestitle = styled(Typography)({
  alignItems: "center",
  padding: "5px",
});
export const BoxGrid = styled(motion(Box))(({ theme }) => ({
  backgroundColor: "#f4f4f4",
  borderRadius: "16px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  alignItems: "center",
  justifyContent: "center",
  padding: "32px 16px",
  height: "200px", 
  transition: "background-color 0.3s, transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    backgroundColor: "rgba(255, 217, 225, 1)", 
    transform: "scale(1.1)",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
  },
}));

export const IconSection = styled(Box)({
  fontSize: "20px",
  marginBottom: "0",
});
