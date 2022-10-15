import { Box, Divider, Paper, Typography } from "@mui/material";
import React from "react";

function Fasilitas() {
  return (
    <>
      <Box mt="20px" align="center">
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
