import { Box, Link } from "@mui/material";
import oveitLogoFooter from "../../assets/oveitLogoFooter.svg";
import { FooterBox } from "./Footer.style";

const Footer = () => {
  return (
    <FooterBox component="footer" display="flex" justifyContent="center">
      <Link href="https://oveit.com/" target="_blank" rel="noopener noreferrer">
        <Box component="img" src={oveitLogoFooter} alt="Oveit Logo" />
      </Link>
    </FooterBox>
  );
};

export default Footer;
