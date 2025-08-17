"use client";

import style from "@/src/components/OurDiff/OurDiff.module.css";
import Image from "next/image";
import { ourDiffFeatures } from "@/src/utils/data";
import { motion } from "motion/react";
import {
  containerVariants,
  desVariants,
  tagVariants,
  titleVariants,
} from "@/src/utils/animation";

const OurDiff = () => {
  return (
    <div id="our-difference" className={style["od-wrapper"]}>
      <div className={style["od-container"]}>
        <div className={style["od-head"]}>
          <motion.span
            className="tag"
            initial="offscreen"
            whileInView="onscreen"
            variants={tagVariants}
          >
            Our difference
          </motion.span>
          <motion.span
            className="title"
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}
          >
            Fair capital, hassle free
          </motion.span>
          <motion.span
            className="text"
            initial="offscreen"
            whileInView="onscreen"
            variants={desVariants}
          >
            Our mission is to level the playing field for early stage growth
            capital. We provide capital that is unbiased, flexible and non
            dilutive with the execution support to accelerate value creation.
          </motion.span>
        </div>

        <div className={style["od-features"]}>
          {ourDiffFeatures.map((fea, idx) => {
            return (
              <motion.div
                className={style["od-feature"]}
                key={idx}
                initial="offscreen"
                whileInView="onscreen"
                variants={containerVariants((idx + 1) * 0.1)}
              >
                <Image src={fea.icon} alt="img" width={128} height={128} />
                <span className="sec-title">{fea.title}</span>
                <span className="text">{fea.des}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurDiff;
