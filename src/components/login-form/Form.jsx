import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";

import "../register-form/form.css";

const LoginForm = () => {
  // navigation
  const navigate = useNavigate();
  // toast config
  toast.configure();
  // login form Ref
  const emailRef = useRef();
  const passwordRef = useRef();

  const [showPassword, setShowPassword] = useState(false);

  // input functions
  const showPasswordFn = () => {
    setShowPassword(!showPassword);
  };

  const loginUser = async (e) => {
    e.preventDefault();
    // check if the input fields are empty
    if (!emailRef.current.value | !passwordRef.current.value) {
      toast("Please fill the form correctly", {
        type: "error",
        position: "bottom-center",
        theme: "colored",
      });
    }
    // sign in user
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      // store the token in session
      sessionStorage.setItem("token", user.user.refreshToken);
      // redirect to dashboard
      toast.success("Welcome Back !!", {
        position: "top-center",
        theme: "colored",
      });
      navigate("/dashboard");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        toast("Password is Incorrect", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
      if (error.code === "auth/user-not-found") {
        toast("User Not Found", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
    }
  };

  const resetPassword = async (e) => {
    e.preventDefault();
    try {
      if (!emailRef.current.value) {
        toast("Enter Recovery Mail", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      } else {
        sendPasswordResetEmail(auth, emailRef.current.value);
        toast.info("Check Your Email for a reset Link", {
          theme: "colored",
          position: "top-center",
        });
      }
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        toast("Enter Recovery Mail", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
    }
  };

  return (
    <div className="p-4 space-y-3">
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-neutral-600 font-normal">
          Email Address
        </label>
        <input
          type="email"
          ref={emailRef}
          className="w-full bg-green-50/50 border-green-800 border outline-none p-3 rounded"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-neutral-600 font-normal">
          Password
        </label>
        <div className="w-full bg-green-50/50 border-green-800 border rounded flex items-center">
          <input
            type={!showPassword ? "password" : "text"}
            ref={passwordRef}
            className="w-full bg-transparent outline-none p-3"
          />
          <div className="mr-3">
            {showPassword ? (
              <MdVisibility
                className="text-xl cursor-pointer"
                onClick={showPasswordFn}
              />
            ) : (
              <MdVisibilityOff
                className="text-xl cursor-pointer"
                onClick={showPasswordFn}
              />
            )}
          </div>
        </div>
      </div>
      <button
        onClick={resetPassword}
        className="text-red-800 capitalize hover:text-red-600"
      >
        reset password
      </button>
      <button
        onClick={loginUser}
        className="w-full p-3 bg-green-800 text-white uppercase text-lg rounded shadow my-3"
      >
        Login
      </button>
    </div>
  );
};

export default LoginForm;
