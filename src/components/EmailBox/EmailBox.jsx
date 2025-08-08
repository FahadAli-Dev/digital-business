"use clinet";
import { motion } from "motion/react";

import style from "./EmailBox.module.css";
import { LuMail } from "react-icons/lu";

const EmailBox = () => {
  const searchBarVariants = (duration) => ({
    ofScreen: { y: "2rem", opacity: 0 },
    onScreen: {
      y: "0rem",
      opacity: 1,
      transition: { delay: 1, ease: "linear", duration: duration },
    },
  });

  const MotionLuMail = motion.create(LuMail);

  return (
    <motion.div
      initial={{ width: "10%" }}
      animate={{
        width: "80%",
        transition: { duration: 1, ease: "linear" },
      }}
      className={style["emailBox"]}
    >
      <MotionLuMail
        initial="ofScreen"
        animate="onScreen"
        variants={searchBarVariants(0.5)}
        size={35}
      />
      <motion.input
        initial="ofScreen"
        animate="onScreen"
        variants={searchBarVariants(0.6)}
        type="text"
        placeholder="Enter Email"
      />
      <motion.button
        initial="ofScreen"
        animate="onScreen"
        variants={searchBarVariants(0.7)}
      >
        Get Funded
      </motion.button>
    </motion.div>
  );
};

export default EmailBox;
