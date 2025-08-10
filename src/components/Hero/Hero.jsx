"use client";

import EmailBox from "../EmailBox/EmailBox";
import style from "./Hero.module.css";
import { heroData } from "../../utils/data";
import Image from "next/image";
import { motion } from "motion/react";

const imgVariants = (delay) => ({
  offScreen: { y: "18rem" },
  onScreen: {
    y: "0rem",
    transition: {
      damping: 25,
      type: "spring",
      delay: delay,
    },
  },
});

const Hero = () => {
  return (
    <div className={style["hero-wrapper"]}>
      <div className={style.container}>
        <div className={style["hero-container"]}>
          {/* Left Side  */}
          <div className={style["hero-left"]}>
            {heroData.map((v, i) => {
              return (
                <div
                  key={i}
                  style={{
                    margin: `${i == 1 || i == 4 ? "-5rem 0 0 0.1rem" : ""}`,
                  }}
                  className={style["img-container"]}
                >
                  <motion.div
                    initial="offScreen"
                    animate="onScreen"
                    variants={imgVariants(0)}
                    className={style["img-bg"]}
                    style={{
                      backgroundColor: `${v.bg}`,
                    }}
                  >
                    <motion.div
                      initial="offScreen"
                      animate="onScreen"
                      variants={imgVariants(0.1)}
                      className={style["img-outer"]}
                    >
                      <Image
                        className={style["hero-img"]}
                        src={v.src}
                        alt="img"
                        fill
                        quality={100}
                        priority
                        sizes="240px"
                      />
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Right Side  */}
          <div className={style["hero-right"]}>
            <div className={style["hero-title"]}>
              <span>Redefine How</span>
              <span>You grow your</span>
              <span>Digital Business</span>
            </div>
            <div className={style["hero-description"]}>
              <p>
                Revenue based funding and execution support designed for early
                stage founders
              </p>
            </div>
            <EmailBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
