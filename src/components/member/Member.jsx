import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Member = () => {

  const navigate = useNavigate();


  return (
    <>
      <Box
        sx={{
          width: {
            md: "91%",
            sm: "100%",
          },
          mx: "auto",
          my: 6,
          borderRadius: 2,
          padding: 3,
          position: "relative",
          backgroundColor: "#f5f7fe",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: {
              xs: "column-reverse",
              md: "row",
            },
            zIndex: "999",
          }}
        >
          <Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "#000000",
                  bgcolor: "#ffffff",
                  display: "inline-block",
                  p: 1,
                  borderRadius: 3,
                  fontSize: ".8rem",
                  fontWeight: "bold",
                }}
              >
                START TODAY
              </Typography>
              <Typography
                variant="h2"
                sx={{ color: "black", fontWeight: "700", my: 4 }}
              >
                Become a Member
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.2rem", my: 2, fontWeight: "500" }}
              >
                Connect with thousands of self-directed traders and investors
                through live stream, chat and social media ecosystem.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  fontSize: "1.2rem",
                  backgroundColor: "#7ed957",
                  color: "#000000",
                  "&:hover": {
                    backgroundColor: "#7ed957",
                    color: "#fff",
                  },
                }}
                onClick={() => navigate("/auth")}
              >
                Join Our Team Today
              </Button>
            </Box>
            <Box sx={{ my: 2 }}>
              <Typography
                variant="body1"
                sx={{ my: 3, fontWeight: "600", fontSize: "1rem" }}
              >
                We are currently hosted on a Discord server but will <br />
                be moving to our own App this summer.
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontWeight: "700", color: "#000000", my: 2 }}
              >
                Join NOW while the price is still low!
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, fontWeight: "500" }}>
                (Membership doubles when the app is live)
              </Typography>
              <Typography
                variant="body2"
                color="lightgreen"
                sx={{ fontSize: "0.8rem" }}
              >
                Have a coupon code? Click to apply it.
              </Typography>
            </Box>
          </Box>
          <Box>
            <img
              src="https://pmoinvesco.com/wp-content/uploads/2022/06/become-member-img1.png"
              alt="phone"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Member;
