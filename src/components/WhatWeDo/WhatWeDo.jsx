"use client";

import style from "./WhatWeDo.module.css";
import { features } from "../../utils/data";
import Image from "next/image";
import { motion } from "motion/react";
import {
  containerVariants,
  desVariants,
  tagVariants,
  titleVariants,
} from "@/src/utils/animation";

const WhatWeDo = () => {
  return (
    <div className={style["wwd-wrapper"]}>
      <div className={style["wwd-container"]}>
        {/* WhatWeDo Head */}
        <div className={style["wwd-head"]}>
          <motion.span
            className="tag"
            initial="offscreen"
            whileInView="onscreen"
            variants={tagVariants}
          >
            What we do
          </motion.span>
          <motion.span
            className="title"
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}
          >
            Empowering founders with non dilutive capital and execution
            expertise
          </motion.span>
          <motion.span
            className="des"
            initial="offscreen"
            whileInView="onscreen"
            variants={desVariants}
          >
            Here is how we can evaluate
          </motion.span>
        </div>

        {/* WhatWeDo Blocks */}
        <div className={style["wwd-blocks"]}>
          {/* WhatWeDo Block-1  */}
          <div className={style["wwd-block"]}>
            <motion.span
              className="sec-title"
              initial="offscreen"
              whileInView="onscreen"
              variants={titleVariants}
            >
              Blue Adnavces
            </motion.span>
            <motion.span
              className="text"
              initial="offscreen"
              whileInView="onscreen"
              variants={desVariants}
            >
              Fund recurring growth expenses e.g. customer acquisition,
              inventory
            </motion.span>

            {/* WhatWeDo Block Feature-1  */}
            <div className={style["block-features"]}>
              {features.slice(0, 3).map((fea, idx) => {
                return (
                  <motion.div
                    key={idx}
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={containerVariants((idx + 1) * 0.1)}
                  >
                    <Image src={fea.icon} alt="img" width={60} height={60} />{" "}
                    <span>{fea.title}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* WhatWeDo Block-2  */}
          <div className={style["wwd-block"]}>
            <motion.span
              className="sec-title"
              initial="offscreen"
              whileInView="onscreen"
              variants={titleVariants}
            >
              Blue Seed
            </motion.span>
            <motion.span
              className="text"
              initial="offscreen"
              whileInView="onscreen"
              variants={desVariants}
            >
              Fund one-offs to scale e.g. product, hiring
            </motion.span>

            {/* WhatWeDo Block Feature-2  */}
            <div className={style["block-features"]}>
              {features.slice(3, 6).map((fea, idx) => {
                return (
                  <motion.div
                    key={idx}
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={containerVariants((idx + 1) * 0.1)}
                  >
                    <Image src={fea.icon} alt="img" width={60} height={60} />{" "}
                    <span>{fea.title}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* WhatWeDo Support  */}
        <motion.div
          className={style["wwd-support"]}
          initial="offscreen"
          whileInView="onscreen"
          variants={containerVariants(0.3)}
        >
          <div>
            <span className="sec-title">Blue Growth Support</span>
            <span className="des">
              Data Insights and full stack expertise to supercharge growth
            </span>
          </div>
          <div>
            <span className="text">
              Actionable data insights by connecting revenue, marketing and
              social media platforms
            </span>
            <span className="text">
              On demand execution expertise at cost or revenue share across
              proposition design, engineering, marketing analytics,
              partnerships, brand, intellectual property, market expansion,
              talent management
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDo;
