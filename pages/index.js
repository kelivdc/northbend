import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Button, Chip, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { WhatsApp } from "@mui/icons-material";
import Unit from "../components/Unit";
import Fasilitas from "../components/Fasilitas";
import Hubungi from "../components/Hubungi";
import Footer from "../components/Footer";
import Spesification from "../components/Spesification";
import Navbar from "../components/Navbar";
import Head from "next/head";

function Index() {
  const handleWA = () => {
    location.replace(
      "https://wa.me/6281222226880?text=Halo..Marketing Northbend, saya berminat dengan perumahan ini, boleh info lengkap? Terima kasih"
    );
  };
  return (
    <>
      <Head>
        <title>Metland Cyber City - Northbend - Perumahan Baru Tangerang</title>
        <meta
          name="description"
          content="Dijual perumahan Northbend Metland cyber Tangerang. Start Rp. 2,4M an"
        />
      </Head>
      <React.Fragment>
        <CssBaseline />
        <Box
          m={{
            xs: "10px",
            md: "40px",
          }}
          bgcolor="#fff"
          borderRadius="15px"
          p={{
            xs: "10px",
            md: "20px",
          }}
        >
          <Stack direction="row" mt={2}>
            <Image
              src="/images/logo.jpg"
              width={60}
              height={60}
              alt="Northbend Logo"
            />
            <Box alignContent="center" alignItems="center" m="auto">
              <Typography
                component="h2"
                variant="h4"
                fontWeight="bold"
                fontFamily="Poppins"
              >
                The Northbend
              </Typography>
              <Typography
                fontWeight="bold"
                fontFamily="Poppins"
                color="#15759f"
              >
                Phase 3
              </Typography>
            </Box>
          </Stack>
          <hr size="1" color="#ccc" />
          <Box
            width={{
              xs: "100%",
              md: "70%",
            }}
            m="auto"
            mt="20px"
          >
            <Image
              src="/images/foto1.png"
              width={400}
              height={618}
              layout="responsive"
              align="center"
            />
            <Image
              src="/images/image1.png"
              width={895}
              height={448}
              layout="responsive"
              align="center"
            />
          </Box>
          <Box mt={4}>
            <Divider>
              <Chip
                color="primary"
                label="Start Rp. 2,4 M-an"
                sx={{
                  fontSize: "20px",
                }}
              />
            </Divider>
            <Typography
              color="#8d6815"
              component="h2"
              mt={2}
              variant={{
                xs: "h2",
                md: "h2",
              }}
            >
              Modern Living
            </Typography>
            Metland Cyber City adalah sebuah kota modern yang hadir dengan
            infrasturktur terpadu serta fasilitas area ruang hijau dan ruang
            terbuka seluas 3HA. Dengan proporsi seimbang. Di antaranya adalah
            Galeri Perkotaan sebagai bagian dari pusta gaya hidup bagi
            orang-orang kreatif untuk berkumpul dan mengungkapkan karya besar
            mereka.
            <Box mt="20px" fontWeight="bold">
              Hubungi
            </Box>
            <Button
              color="success"
              variant="contained"
              endIcon={<WhatsApp />}
              onClick={handleWA}
            >
              Ira 0812 2222 6880
            </Button>
          </Box>
          <Unit />
          <Spesification />
          <Fasilitas />
          <Hubungi />
          <Navbar />
        </Box>
        <Footer />
      </React.Fragment>
    </>
  );
}

export default Index;