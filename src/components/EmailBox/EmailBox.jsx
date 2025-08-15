"use clinet";
import { motion } from "motion/react";
import { useState, useEffect, useCallback } from "react";

import style from "./EmailBox.module.css";
import { LuMail } from "react-icons/lu";

const EmailBox = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize(); // set initial width

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const searchBarVariants = (duration) => ({
    offscreen: { y: "2rem", opacity: 0 },
    onscreen: {
      y: "0rem",
      opacity: 1,
      transition: { delay: 1, ease: "linear", duration: duration },
    },
  });

  const MotionLuMail = motion.create(LuMail);

  return (
    <motion.div
      initial={{ width: "10%" }}
      whileInView={{
        width: `${width > 1024 ? "80%" : width <= 560 ? "90%" : "60%"}`,
        transition: { duration: 1, ease: "linear" },
      }}
      viewport={{ once: true }}
      className={style["emailBox"]}
    >
      <MotionLuMail
        initial="offscreen"
        whileInView="onscreen"
        variants={searchBarVariants(0.5)}
        viewport={{ once: true }}
        size={35}
      />
      <motion.input
        initial="offscreen"
        whileInView="onscreen"
        variants={searchBarVariants(0.6)}
        viewport={{ once: true }}
        type="text"
        placeholder="Enter Email"
      />
      <motion.button
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={searchBarVariants(0.7)}
      >
        {width <= 420 ? "Funded" : "Get Funded"}
      </motion.button>
    </motion.div>
  );
};

export default EmailBox;
