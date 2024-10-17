import React, { useState } from "react";
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";
import {
  Banner,
  CenteredGrid,
  Title,
  SubscribeButton,
  PartnerDescription,
  ModalBox,
  SubscribeBox,
  FormButton,
  SendIcon,
  TitleModal,
  TextForm,
} from "./Subscribe.style";
import MarkunreadMailboxRoundedIcon from "@mui/icons-material/MarkunreadMailboxRounded";
import {  Modal,  } from "@mui/material";

const Subscribe = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <SubscribeBox>
      <Banner
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <CenteredGrid>
          <Grid item xs={12} lg={6}>
            <Title variant="h1">
              Since 2017, we have been managing the most popular events
            </Title>
            <PartnerDescription variant="body1">
              We collaborate with the most relevant brands. Click the button
              below to receive a consultation from us.
            </PartnerDescription>
            <SubscribeButton
              variant="contained"
              onClick={handleOpen}
            >
              Request Information
              <MarkunreadMailboxRoundedIcon className="icon" />
            </SubscribeButton>
          </Grid>
        </CenteredGrid>
      </Banner>

      <Modal open={open} onClose={handleClose}>
        <ModalBox>
          <TitleModal variant="h6" component="h2">
            Enter the details below.
          </TitleModal>
          <TextForm label="Email" variant="outlined" fullWidth />
          <TextForm label="Telephone Number" variant="outlined" fullWidth />
          <FormButton variant="contained" onClick={handleClose}>
            Submit
            <SendIcon />
          </FormButton>
        </ModalBox>
      </Modal>
    </SubscribeBox>
  );
};

export default Subscribe;
