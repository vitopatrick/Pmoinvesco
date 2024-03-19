import React from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import { test } from "./test";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimony = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container sx={{ my: 4 }}>
      <Slider {...settings}>
        {test.map((t) => (
          <Paper
            key={t.id}
            sx={{
              width: "360px",
              height: "300px",
              p: 2,
              bgcolor: "#fff",
              color: "#000",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Box>
                {/* <img
                  src="https://pmoinvesco.app/assets/images/client-image.svg"
                  alt="logo"
                /> */}
              </Box>
              <Box sx={{ px: 2 }}>
                <Typography
                  sx={{ fontWeight: "bold", mb: 2, color: "#1f4d0b" }}
                >
                  {t.person}
                </Typography>
                <Typography>{t.position}</Typography>
              </Box>
              <Box>
                {/* <img
                  src="https://pmoinvesco.app/static/media/quotes-img.380b30dd060a400cf14d.svg"
                  alt="logo"
                /> */}
              </Box>
            </Box>
            <Box sx={{ p: 2 }}>
              <Typography sx={{ lineHeight: 2 }}>{t.testimony}</Typography>
            </Box>
          </Paper>
        ))}
      </Slider>
    </Container>
  );
};

export default Testimony;
