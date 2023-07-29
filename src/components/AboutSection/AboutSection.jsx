import { Box, Container, Typography } from "@mui/material";
import React from "react";

const AboutSection = () => {
  return (
    <Box sx={{ backgroundColor: "#1f4d0b", p: 2 }}>
      <Container>
        <Box>
          <Box>
            <Typography
              variant="h3"
              sx={{
                color: "#fff",
                p: 2,
                textAlign: "center",
                my: 2,
                fontWeight: "500",
                fontSize: {
                  xs: "23px",
                  md: "30px",
                },
                textTransform: "capitalize",
              }}
            >
              The average trader uses 6 different platforms to make their
              trading decisions.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                p: 2,
                textAlign: "center",
                my: 2,
                fontWeight: "500",
                fontSize: {
                  xs: "0.8rem",
                  md: "1rem",
                },
              }}
            >
              Pmoinvesco helps you make better trading decisions faster with a
              single platform for connecting, analyzing, researching and
              signaling.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: {
                xs: "100%",
                md: "70%",
              },
              mx: "auto",
              my: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                mx: 1,
                backgroundColor: "#2e5f18",
                color: "#ffffff",
                fontSize: {
                  xs: "0.6rem",
                  md: "0.8rem",
                },
                py: 1,
                px: 3,
                borderRadius: 4,
                fontWeight: "bold",
                "&:hover": {
                  color: "#2e5f18",
                  backgroundColor: "#fff",
                },
              }}
            >
              Profile
            </Typography>
            <Typography
              sx={{
                mx: 1,
                backgroundColor: "#2e5f18",
                color: "#ffffff",
                fontSize: {
                  xs: "0.6rem",
                  md: "0.8rem",
                },
                py: 1,
                px: 3,
                borderRadius: 4,
                fontWeight: "bold",
                "&:hover": {
                  color: "#2e5f18",
                  backgroundColor: "#fff",
                },
              }}
            >
              Post Feed
            </Typography>
            <Typography
              sx={{
                mx: 1,
                backgroundColor: "#2e5f18",
                color: "#ffffff",
                fontSize: {
                  xs: "0.6rem",
                  md: "0.8rem",
                },
                py: 1,
                px: 3,
                borderRadius: 4,
                fontWeight: "bold",
                "&:hover": {
                  color: "#2e5f18",
                  backgroundColor: "#fff",
                },
              }}
            >
              Live Trading
            </Typography>
            <Typography
              sx={{
                mx: 1,
                backgroundColor: "#2e5f18",
                color: "#ffffff",
                fontSize: {
                  xs: "0.6rem",
                  md: "0.8rem",
                },
                py: 1,
                px: 3,
                borderRadius: 4,
                fontWeight: "bold",
                "&:hover": {
                  color: "#2e5f18",
                  backgroundColor: "#fff",
                },
              }}
            >
              Briefing
            </Typography>
          </Box>
          {/* <Box>
            <img src="/img/trading-platform.svg" alt="phone" />
          </Box> */}
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
