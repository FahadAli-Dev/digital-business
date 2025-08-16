"use client";

import style from "./page.module.css";
import { motion } from "motion/react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero";
import BrandingVideo from "../components/BrandingVideo/BrandingVideo";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import OurDiff from "../components/OurDiff/OurDiff";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import WhoWeInvest from "../components/WhoWeInvest/WhoWeInvest";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";

const page = () => {
  return (
    <div className={style.app}>
      <Navbar />
      <Hero />
      <BrandingVideo />
      <WhatWeDo />

      <motion.div
        onViewportEnter={() => {
          document.body.style.background = "var(--secondary-color)";
        }}
        onViewportLeave={() => {
          document.body.style.background = "white";
        }}
        viewport={{ amount: 0.2 }}
      >
        <OurDiff />
      </motion.div>

      <HowItWorks />

      <motion.div
        onViewportEnter={() => {
          document.body.style.background = "var(--primary-color)";
        }}
        onViewportLeave={() => {
          document.body.style.background = "white";
        }}
        viewport={{ amount: 0.3 }}
      >
        <WhoWeInvest />
      </motion.div>

      <Testimonials />
      <Footer />
    </div>
  );
};

export default page;
