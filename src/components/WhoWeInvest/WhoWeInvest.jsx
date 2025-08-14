import { whoWeInvest } from "@/src/utils/data";
import style from "./WhoWeInvest.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  containerVariants,
  tagVariants,
  titleVariants,
} from "@/src/utils/animation";
import { motion } from "motion/react";

const WhoWeInvest = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize(); // set initial width

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className={style["wwi-wrapper"]}>
      <div className={style["wwi-container"]}>
        {/* left side  */}
        <div className={style["wwi-left"]}>
          <div className={style["wwi-head"]}>
            <motion.span
              className="tag"
              initial="offscreen"
              whileInView="onscreen"
              variants={tagVariants}
            >
              Who we invest in
            </motion.span>
            <motion.span
              className="title"
              initial="offscreen"
              whileInView="onscreen"
              variants={titleVariants}
            >
              Digital businesses <br /> with early traction
            </motion.span>
          </div>
          <div className={style["wwi-details"]}>
            {whoWeInvest.map((dea, idx) => {
              return (
                <motion.div
                  className={style["wwi-detail"]}
                  key={idx}
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={containerVariants(idx * 0.05 + 1)}
                >
                  <span className="des">{dea.title}</span>
                  <span className="text">{dea.des}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* right side  */}
        <motion.div
          className={style["wwi-right"]}
          initial="offscreen"
          whileInView="onscreen"
          variants={containerVariants(0.5)}
        >
          <Image
            src="/WhoWeInvest/persons.png"
            alt="person"
            fill
            sizes="600"
            style={{
              objectFit: "contain",
              marginTop: `${
                width > 1240 ? "3.3rem" : width > 1024 ? "6.7rem" : ""
              }`,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default WhoWeInvest;
