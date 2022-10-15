import { WhatsApp } from "@mui/icons-material";
import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";

function Hubungi() {
  const handleWA = () => {
    location.replace(
      "https://wa.me/6281222226880?text=Halo..Marketing Northbend, saya berminat dengan perumahan ini, boleh info lengkap? Terima kasih"
    );
  };
  return (
    <Box mt="20px" align="center">
      <Divider>
        <Typography
          component="h3"
          variant="h4"
          fontFamily="Pacifico"
          align="center"
          p={2}
        >
          Hubungi
        </Typography>       
      </Divider>
      Official Marketing
        <br />
        <Button
          color="success"
          variant="contained"
          endIcon={<WhatsApp />}
          onClick={handleWA}
        >
          Ira 0812 2222 6880
        </Button>
    </Box>
  );
}

export default Hubungi;
