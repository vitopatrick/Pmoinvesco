import React from "react";
import { Box, Typography, Grid, Paper, Container } from "@mui/material";
import { about } from "./lists";

const About = () => {
  return (
    <React.Fragment>
      <Box sx={{ mt: 6 }}>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="body1"
              textAlign="center"
              gutterBottom
              sx={{
                color: "#7ed957",
                fontSize: "0.6rem",
                backgroundColor: "#f5f7fe",
                borderRadius: 2,
                p: 1,
                display: "inline-block",
              }}
            >
              Pmoinvesco
            </Typography>
            <Typography
              variant="h4"
              component="p"
              textAlign="center"
              sx={{
                color: "#1f4d0b",
                fontStyle: "italics",
                textDecoration: "underline",
              }}
            >
              How it Works:
            </Typography>
          </Box>
          <Container sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              {about.map((about) => (
                <Grid item xs={12} md={3} key={about.id}>
                  <Paper
                    sx={{
                      p: { xs: 2, md: 3 },
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      bgcolor: "#fff",
                    }}
                    elevation={0}
                  >
                    <Box
                      sx={{
                        width: { xs: "10%", md: "20%" },
                        height: "100px",
                      }}
                    >
                      <img src={about.img} alt={about.title} />
                    </Box>
                    <Box sx={{ mt: 2 }}>
                      <Typography
                        variant="h6"
                        textAlign="center"
                        gutterBottom
                        sx={{ fontWeight: "bold", color: "darkgreen", mb: 2 }}
                      >
                        {about.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        textAlign="center"
                        sx={{ color: "gray" }}
                      >
                        {about.about}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default About;
