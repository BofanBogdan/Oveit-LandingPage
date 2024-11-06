import React from "react";
import { motion } from "framer-motion";
import { Box, Typography, ListItem } from "@mui/material";
import {
  NavContainer,
  NavbarList,
  NavbarBox,
  HeadList,
  NavTitle,
  LogoImage,
} from "./Navbar.style";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../../public/Logo-Oveit.png";

const NavbarMenu = [
  { id: 1, title: "Services", link: "#" },
  { id: 2, title: "Oveit Stage", link: "#" },
  { id: 3, title: "Cotact Us", link: "#" },
];

const Navbar = () => {
  return (
    <nav style={{ position: "relative", zIndex: 20 }}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <NavContainer>
          {/* Logo section */}
          <Box display="flex" alignItems="center">
            <LogoImage src={Logo} alt="Oveit Logo" />
            <NavTitle variant="h4" component="h1" fontWeight="bold">
              Oveit Checkin
            </NavTitle>
          </Box>
          {/* Menu section */}
          <Box display={{ xs: "none", lg: "block" }}>
            <HeadList>
              {NavbarMenu.map((menu) => (
                <ListItem key={menu.id} disablePadding>
                  <NavbarList>
                    <NavbarBox />
                    {menu.title}
                  </NavbarList>
                </ListItem>
              ))}
            </HeadList>
          </Box>
          {/* Mobile Hamburger menu section */}
          <Box display={{ xs: "block", lg: "none" }}>
            <MenuIcon style={{ fontSize: "60px" }} />
          </Box>
        </NavContainer>
      </motion.div>
    </nav>
  );
};

export default Navbar;
