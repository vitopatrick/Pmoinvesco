/*eslint-disable */
import React, { useEffect } from "react";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Reason from "../components/Reason/Reason";
import Testimonials from "../components/Testimonials/Testimonials";
import AboutSection from "../components/AboutSection/AboutSection";
import Team from "../components/Team/Team";
import Member from "../components/member/Member";
import Greeting from "../components/Greeting/Greeting";

const Home = () => {
  useEffect(() => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/64c47f7294cf5d49dc671861/1h6fp3mqp";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);
  return (
    <>
      <Header />
      <About />
      <Reason />
      <AboutSection />
      <Testimonials />
      <Team />
      <Member />
      <Footer />
      <Greeting />
    </>
  );
};

export default Home;

