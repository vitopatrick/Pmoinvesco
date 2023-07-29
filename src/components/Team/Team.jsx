import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { memebers } from "../../pages/team";

const Team = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1f4d0b",
        width: "99%",
        mx: "auto",
        borderRadius: 2,
        mb: 3,
        p: 2,
      }}
    >
      <Container>
        <Grid container spacing={3}>
          {memebers.map((memeber) => (
            <Grid item sm={12} md={4}>
              <Paper sx={{ p: 2, bgcolor: "#fff", height: "400px" }}>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "700",
                      textAlign: "center",
                      color: "#1f4d0b",
                      textTransform: "uppercase",
                      my: 1,
                      fontSize: "1.8rem",
                    }}
                  >
                    {memeber.names}
                  </Typography>
                </Box>
                {/* <Box sx={{ width: "219", height: "219" }}>
                  <img src={memeber.img} alt={memeber.names} />
                </Box> */}
                <Divider />
                <Box
                  sx={{ display: "flex", alignItems: "center", color: "#000" }}
                >
                  <Typography
                    sx={{ fontWeight: "bold", fontSize: "14px", color: "#000" }}
                  >
                    Style:
                  </Typography>
                  <Typography sx={{ fontSize: "14px", color: "#000" }}>
                    {memeber.style}
                  </Typography>
                </Box>
                <Divider />
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{ fontWeight: "bold", fontSize: "14px", color: "#000" }}
                  >
                    Risk Proflie:
                  </Typography>
                  <Typography sx={{ fontSize: "14px", color: "#000" }}>
                    {memeber.rp}
                  </Typography>
                </Box>
                <Divider />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{ fontWeight: "bold", fontSize: "14px", color: "#000" }}
                  >
                    Bio:
                  </Typography>
                  <Typography sx={{ fontSize: "14px", color: "#000" }}>
                    {memeber.bio}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Team;
