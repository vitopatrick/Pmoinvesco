import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, store } from "../../firebase";
import { useNavigate } from "react-router-dom";
// import "./form.css";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";

const RegisterForm = () => {
  // control the input fields
  const [disable, setDisable] = useState(false);
  const [country, setCountry] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userCountry, setUserCountry] = useState("");

  // toast configuration
  toast.configure();
  // navigation router hook
  const navigate = useNavigate();

  // input functions
  const showPasswordFn = () => {
    setShowPassword(!showPassword);
  };

  // fetch countries
  const fetchCountry = async () => {
    try {
      const apiCall = await fetch(
        "https://countriesnow.space/api/v0.1/countries"
      );
      const response = await apiCall.json();
      const countriesAndCities = response.data;

      const countries = countriesAndCities.map((country) => {
        return {
          main: country.country,
        };
      });
      setCountry(countries);
    } catch (error) {
      setDisable(true);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  // function to create and save user to the database
  const saveUser = async (e) => {
    e.preventDefault();
    // check if the input fields are empty
    if (
      !firstName |
      !email |
      !phone |
      !password |
      !userCountry |
      !confirmPassword |
      !lastName
    ) {
      toast("Please fill the form correctly", {
        type: "error",
        position: "bottom-center",
        theme: "colored",
      });
    }
    //create the user in firebase and then save to firestore
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // send verification
      sendEmailVerification(user);
      // set the backdrop

      // add to the database
      await setDoc(doc(store, "users", email), {
        email: user.email,
        name: `${firstName} ${lastName}`,
        phone,
        password,
        country: userCountry,
        balance: 0,
        profit: 0,
        bonus: 20,
        deposited: 0,
        refBonus: 0,
        totalPackages: 0,
        activePackages: 0,
        verified: user.emailVerified,
        createdAt: user.metadata.creationTime,
        uid: user.uid,
      });
      // toast notification
      toast.success("Welcome to Pmoinvesco,You can now login", {
        position: "top-center",
        theme: "colored",
      });
      // redirect user to login
      navigate("/auth");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast("Email is already in use", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
      if (error.code === "auth/weak-password") {
        toast("Password Should be Greater than six characters", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
      if (error.code === "auth/invalid-email") {
        toast("Invalid Email", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
    }
  };

  return (
    <div className="p-4">
      <div className="space-y-6">
        {/* the root flex container */}
        <div className="flex md:flex-row flex-col items-center gap-2">
          <div className="w-full">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="first name"
                className="text-neutral-600 font-normal"
              >
                First Name
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full bg-green-50/50 border-green-800 border outline-none p-3 rounded"
              />
            </div>
          </div>

          <div className="w-full">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="last name"
                className="text-neutral-600 font-normal"
              >
                Last Name
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full bg-green-50/50 border-green-800 border outline-none p-3 rounded"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-neutral-600 font-normal">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-green-50/50 border-green-800 border outline-none p-3 rounded"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="first name" className="text-neutral-600 font-normal">
            Phone Number
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-green-50/50 border-green-800 border outline-none p-3 rounded"
          />
        </div>
        <div className="flex md:flex-row flex-col items-center gap-2">
          <div className="w-full">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="password"
                className="text-neutral-600 font-normal"
              >
                Password
              </label>
              <div className="w-full bg-green-50/50 border-green-800 border rounded flex items-center">
                <input
                  type={!showPassword ? "password" : "text"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="password"
                className="text-neutral-600 font-normal"
              >
                Confirm Password
              </label>
              <div className="w-full bg-green-50/50 border-green-800 border rounded flex items-center">
                <input
                  type={!showPassword ? "password" : "text"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
          </div>
        </div>
        <select
          className="w-full p-4 rounded bg-green-50/50 border-green-800 border outline-none"
          value={userCountry}
          onChange={(e) => setUserCountry(e.target.value)}
          disable={disable}
        >
          {country.map((count, index) => (
            <option value={count.main} key={index}>
              {count.main}
            </option>
          ))}
        </select>
        <button
          className="p-4 rounded bg-green-800 w-full uppercase text-white"
          onClick={saveUser}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
