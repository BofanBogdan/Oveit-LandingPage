import React from "react";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import {
  ServicesSection,
  IconsBox,
  ServicesBox,
  Title,
  BoxGrid,
  Servicestitle,
  IconSection,
} from "./Services.style";
import LanguageIcon from "@mui/icons-material/Language";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import ComputerIcon from "@mui/icons-material/Computer";
import Grid from "@mui/material/Grid";

const ServicesData = [
  {
    id: 1,
    title: "Oveit Events",
    link: "#",
    icon: <LanguageIcon />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Mobile App",
    link: "#",
    icon: <SmartphoneIcon />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Desktop APP",
    link: "#",
    icon: <ComputerIcon />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Badge Scanner",
    link: "#",
    icon: <QrCodeScannerIcon />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "Event tickets",
    link: "#",
    icon: <LocalActivityIcon />,
    delay: 0.6,
  },
  {
    id: 6,
    title: "Support",
    link: "#",
    icon: <SupportAgentIcon />,
    delay: 0.7,
  },
];

const createSlideLeftAnimation = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Services = () => {
  return (
    <ServicesSection component="section">
      <ServicesBox className="container">
        <Title variant="h4">Services we offer:</Title>
        <IconsBox>
          <Grid container spacing={2}>
            {ServicesData.map((service) => (
              <Grid item xs={6} sm={4} md={2} key={service.title}>
                <BoxGrid
                  variants={createSlideLeftAnimation(service.delay)}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <IconSection>{service.icon}</IconSection>
                  <Servicestitle variant="h6">{service.title}</Servicestitle>
                </BoxGrid>
              </Grid>
            ))}
          </Grid>
        </IconsBox>
      </ServicesBox>
    </ServicesSection>
  );
};

export default Services;
