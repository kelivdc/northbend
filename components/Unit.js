import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

function Unit() {
  return (
    <Box mt="20px">
      <Divider>
        <Typography
          component="h3"
          variant="h4"
          fontFamily="Pacifico"
          align="center"
          p={2}
        >
          Units
        </Typography>
      </Divider>
      <Grid
        container
        spacing={{
          xs: 0,
          md: 2,
        }}
        alignContent="center"
        alignSelf="center"
        sx={{
          maxWidth: {
            xs: "100%",
            md: "80%",
          },
          margin: {
            xs: "auto",
            md: "auto",
          },
          padding: "5px",
        }}
      >
        <Grid item xs={12} md={6} mt={2}>
          <Card>
            <CardActionArea>
              <Image
                src="/images/type6.png"
                layout="responsive"
                width={648}
                height={324}
                alt="Type 6"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Type 6
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  6x12 / LT 72, LB 72
                  <br /> 3 Bedroom Kitchen & Pantry
                  <br />
                  2 Bathroom Carport 2 Car
                  <br />
                  Living Room
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} mt={2}>
          <Card>
            <CardActionArea>
              <Image
                src="/images/type7.png"
                layout="responsive"
                width={648}
                height={324}
                alt="Type 6"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Type 7
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  7x12 / LT 84, LB 86 <br />3 Bedroom Kitchen & Pantry
                  <br />
                  3 Bathroom Carport 2 Car
                  <br />
                  Living Room
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} mt={2}>
          <Card>
            <CardActionArea>
              <Image
                src="/images/type7.png"
                layout="responsive"
                width={648}
                height={324}
                alt="Type 6"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Type 7
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  7x15 / LT 105, LB 86 <br />3 Bedroom Kitchen & Pantry
                  <br />
                  3 Bathroom Carport 2 Car
                  <br />
                  Living Room
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} mt={2}>
          <Card>
            <CardActionArea>
              <Image
                src="/images/type8.png"
                layout="responsive"
                width={648}
                height={324}
                alt="Type 6"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Type 8
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  8x12 / LT 96, LB 102 <br />3 Bedroom Kitchen & Pantry
                  <br />
                  3 Bathroom Carport 2 Car
                  <br />
                  Living Room
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Unit;
