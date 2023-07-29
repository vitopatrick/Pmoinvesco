import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";
import { links } from "./links";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };
  return (
    <React.Fragment>
      <AppBar position="static" sx={{ bgcolor: "#ffff" }} elevation={0}>
        <Toolbar
          sx={{ p: 1, display: "flex", justifyContent: "space-between" }}
        >
          <Link to="/">
            <Box>
              <h4 className="font-bold text-2xl uppercase text-black">
                Pmoinvesco
              </h4>
            </Box>
          </Link>
          {/* <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {links.map((link) => (
              <Typography variant="body1" component="p" sx={{ mr: 5 }}>
                <Link
                  to={link.path}
                  key={link.id}
                  style={{ color: "#7ed957", fontWeight: "bold" }}
                >
                  {link.title}
                </Link>
              </Typography>
            ))}
          </Box> */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Link to="/auth">
              <Button
                sx={{
                  borderRadius: 5,
                  px: 4,
                  backgroundColor: "#fff",
                  color: "#7ed957",
                  "&:hover": {
                    backgroundColor: "#7ed957",
                    color: "#fff",
                  },
                }}
              >
                LOGIN
              </Button>
            </Link>
            <Link to="/auth">
              <Button
                sx={{
                  borderRadius: 5,
                  px: 3,
                  py: 1,
                  color: "#7ed957",
                  backgroundColor: "#fff",
                  "&:hover": {
                    backgroundColor: "#7ed957",
                    color: "#fff",
                  },
                }}
              >
                SIGN UP
              </Button>
            </Link>
          </Box>
          <Box className="bars">
            <FaBars size="20px" color="#000000" onClick={toggle} />
          </Box>
        </Toolbar>
        <Box className={active ? "sidenav active" : "sidenav"}>
          <Box
            sx={{
              ml: 3,
              mt: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "30%" }}>
              <h4 className="font-bold text-2xl uppercase">Pmoinvesco</h4>
            </Box>
            <Box sx={{ display: "flex" }}>
              CLOSE <FaTimes className="bars" size="20px" onClick={toggle} />
            </Box>
          </Box>
          <Box sx={{ p: 3 }}>
            {links.map((link) => (
              <Typography variant="body1" component="p" sx={{ mt: 1, mb: 3 }}>
                <Link to={link.path} key={link.id} style={{ color: "#fff" }}>
                  {link.title}
                </Link>
              </Typography>
            ))}
            <Box>
              <Link to="/auth">
                <Button
                  sx={{
                    borderRadius: 5,
                    px: 4,
                    backgroundColor: "#fff",
                    color: "#7ed957",
                    "&:hover": {
                      backgroundColor: "#7ed957",
                      color: "#fff",
                    },
                  }}
                >
                  LOGIN
                </Button>
              </Link>
              <Link to="/auth">
                <Button
                  sx={{
                    borderRadius: 5,
                    px: 3,
                    py: 1,
                    color: "#7ed957",
                    mx: 2,
                    backgroundColor: "#fff",
                    "&:hover": {
                      backgroundColor: "#7ed957",
                      color: "#fff",
                    },
                  }}
                >
                  SIGN UP
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
