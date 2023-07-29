import { Typography, Box, Paper, Container } from "@mui/material";
import React from "react";

const SupportCard = () => {
  return (
    <Box>
      <Box>
        <Container>
          <Paper sx={{ p: 2 }}>
            <Typography
              variant="h5"
              textAlign="center"
              sx={{ fontWeight: "bold" }}
              gutterBottom
            >
              Pmoinvesco Support
            </Typography>
            <Typography variant="body2" textAlign="center" gutterBottom>
              For Further inquires contact support@Pmoinvesco.com
            </Typography>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default SupportCard;
