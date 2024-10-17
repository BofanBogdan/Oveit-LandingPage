import {
  styled,
  Box,
  Typography,
  Grid,
  Button,
  TextField,
} from "@mui/material";
import { motion } from "framer-motion";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

export const SubscribeBox = styled(Box)({
  backgroundColor: "#020612",
});

export const Banner = styled(Box)(({ theme }) => ({
  backgroundColor: "#020612",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
  },
}));

export const CenteredGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  animation: "bounce 0.8s ease-in-out",
  marginLeft: "20%",
  marginRight: "20%",
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    marginRight: 0,
  },
}));

export const Title = styled(Typography)({
  color: "#EF047D",
  paddingBottom: "25px",
  fontWeight: "bold",
  fontFamily: "Poppins",
  lineHeight: 1.2,
  fontSize: "40px",
});

export const PartnerDescription = styled(Typography)({
  color: "#FFC2C9",
  fontFamily: "Poppins",
  fontSize: "18px",
});

export const SubscribeButton = styled(motion.Button)(({ theme }) => ({
  marginTop: "2rem",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  backgroundColor: "#EF047D",
  fontFamily: "Poppins",
  borderRadius: "12px",
  gap: "16px",
  height: "50px",
  width: "40%",
  maxWidth: "300px",
  minWidth: "150px",
  textDecoration: "none",
  cursor: "pointer",
  boxShadow: "none",
  "&:hover .icon": {
    animation: "bounce 0.5s ease-in-out ",
    fontSize: "1.25rem",
  },
  "&:hover": {
    boxShadow: "0px 6px 20px rgba(239, 4, 125, 1)",
  },
  [theme.breakpoints.down("sm")]: {
    width: "60%",
  },
}));

export const bounceAnimation = {
  "@keyframes bounce": {
    "0%, 100%": {
      transform: "translateY(0)",
    },
    "50%": {
      transform: "translateY(-5px)",
    },
  },
};

export const ModalBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500",
  color: "#020612",
  backgroundColor: "white",
  borderRadius: "10px",
  boxShadow: 24,
  padding: 20,
  animation: `${bounceAnimation} 0.5s ease-in-out`,
  [theme.breakpoints.down("sm")]: {
    width: "80%",
    maxWidth: "400px",
    maxHeight: "none",
  },
}));

export const FormButton = styled(Button)({
  marginTop: "20px",
  backgroundColor: "#EF047D",
  color: "white",
  "&:hover": {
    backgroundColor: "#D5006D",
  },
});

export const SendIcon = styled(SendRoundedIcon)({
  marginLeft: "8px",
});

export const TitleModal = styled(Typography)({
  color: "#D5006D",
  fontFamily: "Poppins",
  fontWeight: "bold",
});

export const TextForm = styled(TextField)({
  marginTop: "20px",
});
