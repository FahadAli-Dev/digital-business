"use client";

import style from "@/src/components/HowItWorks/HowItWorks.module.css";
import { howItWork } from "@/src/utils/data";
import Image from "next/image";
import { motion, scale } from "motion/react";
import { tagVariants, titleVariants } from "@/src/utils/animation";

const featureVariants = {
  offscreen: { scale: 0.5 },
  onscreen: {
    scale: 1,
    transition: { duration: 1.5, type: "spring" },
  },
};

const HowItWorks = () => {
  return (
    <div id="how-it-work" className={style["hiw-wrapper"]}>
      <div className={style["hiw-container"]}>
        <div className={style["hiw-head"]}>
          <motion.span
            className="tag"
            initial="offscreen"
            whileInView="onscreen"
            variants={tagVariants}
          >
            How it works
          </motion.span>
          <motion.span
            className="title"
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}
          >
            Unlocking potential along the growth journey
          </motion.span>
        </div>
        <div className={style["hiw-features"]}>
          {howItWork.map((fea, idx) => {
            return (
              <motion.div
                className={style["hiw-feature"]}
                key={idx}
                initial="offscreen"
                whileInView="onscreen"
                variants={featureVariants}
              >
                <motion.div
                  className={style["detail"]}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { type: "easeIn", duration: 1, delay: 0.7 },
                  }}
                >
                  <span className="des">0{idx + 1}</span>
                  <span className="sec-title">{fea.title}</span>
                  <span className="text">{fea.des}</span>
                </motion.div>
                <div className={style["icon"]}>
                  <Image src={fea.icon} alt="img" width={128} height={128} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
