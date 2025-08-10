"use client";

import { useRef } from "react";
import style from "./BrandingVideo.module.css";
import { motion, useScroll, useTransform } from "motion/react";

const BrandingVideo = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <div className={style["bv-wrapper"]}>
      <div ref={containerRef} className={style["bv-container"]}>
        <motion.video
          style={{ scale }}
          className={style.brandingVideo}
          loop
          autoPlay
          muted
          controls=""
        >
          <source src="video.mp4" type="video/mp4" />
        </motion.video>
      </div>
    </div>
  );
};

export default BrandingVideo;
