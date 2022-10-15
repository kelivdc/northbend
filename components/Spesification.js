import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function Spesification() {
  return (
    <Box mt="20px" align="center">
      <Divider>
        <Typography
          component="h4"
          variant="h5"
          fontFamily="Poppins"
          align="center"
          p={2}
        >
          Spesifikasi
        </Typography>
      </Divider>
      <Box sx={{
        maxWidth: {
            xs: "100%",
            md: "70%"
        }
      }}>
      <Image
        src="/images/spesifikasi.png"
        width={432}
        height={508}
        alt="Spesifikasi"
      />
      <Image
        src="/images/spesifikasi-rumah.png"
        width={1000}
        height={984}
        alt="Spesifikasi Rumah"
      />
      </Box>
    </Box>
  );
}

export default Spesification;
