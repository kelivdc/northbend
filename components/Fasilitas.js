import { Box, Divider, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function Fasilitas() {
  return (
    <>
   
      <Box mt="20px" align="center">
        <Box sx={{
          maxWidth: "600px"
        }}>
          <Image
            src="/images/peta.png"
            width={600}
            height={847}
            layout="responsive"
            align="center"        
          />
      </Box>
        <Divider>
          <Typography
            component="h3"
            variant="h4"
            fontFamily="Pacifico"
            align="center"
            p={2}
          >
            Fasilitas
          </Typography>
        </Divider>
        Main Boulevard Entrance <br />
        Sky Deck View
        <br />
        Clubhouse
        <br />
        Jogging Track
        <br />
        Gymnasium
        <br />
        Swiming Pool
        <br />
        Park & Green Area
        <br />
        International Hospital
        <br />
        Business Loft
        <br />
        Sport Club
        <br />
        Commercial Block
        <br />
        Uniqlo
        <br />
        Starbucks
      </Box>
    </>
  );
}

export default Fasilitas;
