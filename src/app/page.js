"use client";

import style from "./page.module.css";
import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero";
import BrandingVideo from "../components/BrandingVideo/BrandingVideo";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import OurDiff from "../components/OurDiff/OurDiff";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import { motion } from "motion/react";
import WhoWeInvest from "../components/WhoWeInvest/WhoWeInvest";

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
        viewport={{ amount: 0.2 }}
      >
        <WhoWeInvest />
      </motion.div>
    </div>
  );
};

export default page;
