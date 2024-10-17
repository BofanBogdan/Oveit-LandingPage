import React from "react";
import {
  BannerContainer,
  FunctionsBox,
  Title,
  BannerSection,
  StyledPaper,
  MotionDiv,
  ImgBox,
  FunctioName,
} from "./Banner.style";
import BannerPng from "../../assets/App preview.png";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Banner = () => {
  return (
    <BannerSection>
      <BannerContainer>
        <Grid container spacing={5}>
          {/* Banner Image */}
          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <ImgBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              src={BannerPng}
              alt=""
            />
          </Grid>

          {/* Banner Text */}
          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <FunctionsBox>
              <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Title> The most relevant functions: </Title>
              </motion.h1>

              <MotionDiv>
                <StyledPaper>
                  <AddCircleOutlineOutlinedIcon style={{ fontSize: "42px" }} />
                  <FunctioName variant="h6">Create</FunctioName>
                </StyledPaper>
              </MotionDiv>

              <MotionDiv>
                <StyledPaper>
                  <DocumentScannerOutlinedIcon style={{ fontSize: "42px" }} />
                  <FunctioName variant="h6">Scan</FunctioName>
                </StyledPaper>
              </MotionDiv>

              <MotionDiv>
                <StyledPaper>
                  <SettingsOutlinedIcon style={{ fontSize: "42px" }} />
                  <FunctioName variant="h6">Customize</FunctioName>
                </StyledPaper>
              </MotionDiv>

              <MotionDiv>
                <StyledPaper>
                  <DocumentScannerOutlinedIcon style={{ fontSize: "42px" }} />
                  <FunctioName variant="h6">Print</FunctioName>
                </StyledPaper>
              </MotionDiv>
            </FunctionsBox>
          </Grid>
        </Grid>
      </BannerContainer>
    </BannerSection>
  );
};

export default Banner;
