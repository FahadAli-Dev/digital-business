"use client";

import EmailBox from "../EmailBox/EmailBox";
import style from "./Hero.module.css";
import { heroData } from "../../utils/data";
import Image from "next/image";
import { motion } from "motion/react";

const Hero = () => {
  const MotionImge = motion(Image);
  return (
    <div className={style["hero-wrapper"]}>
      <div className={style.container}>
        <div className={style["hero-container"]}>
          <div className={style["hero-left"]}>
            {heroData.map((v, i) => {
              return (
                // <div key={i} style={{ overflow: "hidden" }}>
                <div
                  key={i}
                  style={{
                    overflow: "hidden",
                    margin: `${i == 1 || i == 4 ? "-5rem 0 0 0.1rem" : ""}`,
                  }}
                  className={style["img-container"]}
                >
                  <motion.div
                    initial={{
                      y: "18rem",
                    }}
                    animate={{
                      y: "0rem",

                      transition: {
                        damping: 25,
                        type: "spring",
                      },
                    }}
                    style={{
                      backgroundColor: `${v.bg}`,
                      borderRadius: "999px",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <MotionImge
                      initial={{
                        y: "18rem",
                      }}
                      animate={{
                        y: "0rem",

                        transition: {
                          damping: 25,
                          type: "spring",
                          // delay: 1,
                        },
                      }}
                      className={style["hero-img"]}
                      src={v.src}
                      quality={100}
                      fill
                      sizes="240px"
                      alt="img"
                      style={{
                        objectFit: "cover",
                        marginTop: "2.1rem",
                        transform: "scale(1.2)",
                        overflow: "hidden",
                      }}
                    />
                  </motion.div>
                </div>
                // </div>
              );
            })}
          </div>
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
