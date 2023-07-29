import { Container, Box, Typography } from "@mui/material";
import { alignItems } from "../style/authStyle";
import { Link } from "react-router-dom";
import { useState } from "react";
import RegisterForm from "../components/register-form/Form";
import LoginForm from "../components/login-form/Form";
import React from "react";

const Auth = () => {
  const [value, setValue] = useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bg-green-800 md:h-screen h-[130vh]">
      <Container maxWidth="md">
        <div className="pt-4">
          <div className="bg-zinc-100 rounded">
            <Box sx={alignItems}>
              <div>
                <Link to="/">
                  <h4 className="my-3 text-2xl uppercase underline">
                    Pmoinvesco
                  </h4>
                </Link>
              </div>
            </Box>
            <div className="flex items-center justify-center gap-3">
              <p
                className={
                  value === 0
                    ? "font-bold text-green-800 underline uppercase cursor-pointer"
                    : "text-neutral-400 cursor-pointer uppercase"
                }
                onClick={() => handleChange(0)}
              >
                Register
              </p>
              <p
                className={
                  value === 1
                    ? "font-bold text-green-800 underline uppercase cursor-pointer"
                    : "text-neutral-400 cursor-pointer uppercase"
                }
                onClick={() => handleChange(1)}
              >
                Login
              </p>
            </div>
            {value === 0 && <RegisterForm />}
            {value === 1 && <LoginForm />}
            <Box sx={alignItems}>
              <Typography variant="caption" textAlign="center" gutterBottom>
                © Pmoinvesco.com
              </Typography>
            </Box>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Auth;
