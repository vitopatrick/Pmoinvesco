import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { IconContext } from "react-icons";

const Reason = () => {
  return (
    <IconContext.Provider value={{ size: "40px" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: 2,
          }}
        >
          <Box>
            <Box>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  fontStyle: "italics",
                  fontSize: "2rem",
                  width: { md: "60%", sm: "100%" },
                  fontWeight: "600",
                }}
              >
                Pmoinvesco is a Self-Directed Trader’s Nerve Center
              </Typography>
            </Box>
            <Box sx={{ display: "flex", mb: 3 }}>
              <Box sx={{ mr: 3 }}>
                <Typography
                  variant="body1"
                  sx={{
                    backgroundColor: "#f5f7fe",
                    borderRadius: 2,
                    p: 2,
                    fontWeight: "bold",
                    "&:hover": {
                      color: "#fff",
                      backgroundColor: "#1e532d",
                    },
                  }}
                >
                  1
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#1f4d0b",
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                  }}
                >
                  Our Mission
                </Typography>
                <Typography
                  sx={{ color: "#404046", width: { sm: "100%", md: "60%" } }}
                >
                  Pmoinvesco partners with professional traders around the globe
                  to provide you a hub of information, education, strategy, live
                  streams, social media ecosystsems and buy/sell signals for
                  self-directed traders and investors. Our mission is to help
                  you make better trading decisions faster.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ mr: 3 }}>
                <Typography
                  variant="body1"
                  sx={{
                    backgroundColor: "#f5f7fe",
                    borderRadius: 2,
                    p: 2,
                    fontWeight: "bold",
                    "&:hover": {
                      color: "#fff",
                      backgroundColor: "#1e532d",
                    },
                  }}
                >
                  2
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#1f4d0b",
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                  }}
                >
                  Our Commitment
                </Typography>
                <Typography
                  sx={{ color: "#404046", width: { sm: "100%", md: "60%" } }}
                >
                  As the popularity of trading and investing shifts from
                  institutional to individual management, we are committed to
                  creating efficient and powerful services for those who what to
                  take charge of their own trades and investments.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              alignSelf: "center",
              width: "50%",
              display: { xs: "none", md: "block" },
              position: "relative",
            }}
          >
            <img src="/img/mobile-app-img.svg" alt="phone" />
            <Box
              sx={{ position: "absolute", top: "50%", mb: 4, width: "100%" }}
            >
              <img
                src="https://pmoinvesco.com/wp-content/uploads/2022/06/background-img-pattern.png"
                alt="phone"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </IconContext.Provider>
  );
};

export default Reason;
