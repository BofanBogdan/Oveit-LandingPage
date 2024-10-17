import { styled, Box, ListItemText, List, Typography } from "@mui/material";

export const NavContainer = styled(Box)({
  padding: "2.5rem 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "1200px",
  marginLeft: "10%",
  marginRight: "10%",
});
export const NavTitle = styled(Typography)({
  color: "#EF047D",
  fontFamily: "Poppins",
  fontSize: "40px",
});

export const LogoImage = styled("img")({
  width: "40px",
  marginRight: "10px",
  borderRadius: "5px",
});

export const NavbarList = styled(Typography)({
  display: "block",
  fontSize: "18px",
  padding: "0.5rem 1rem",
  position: "relative",
  textDecoration: "none",
  transition: "color 0.3s",
  fontFamily: "Poppins",
  whiteSpace: "nowrap",
  color: "white",
  "&:hover": {
    color: "#EF047D",
  },
});

export const NavbarBox = styled(ListItemText)({
  width: "8px",
  height: "8px",
  backgroundColor: "#f50057",
  position: "absolute",
  marginTop: "1rem",
  left: "50%",
  transform: "translateX(-50%)",
  display: "none",
  transition: "display 0.3s",
  whiteSpace: "nowrap",
});

export const HeadList = styled(List)({
  display: "flex",
  gap: 4,
});
