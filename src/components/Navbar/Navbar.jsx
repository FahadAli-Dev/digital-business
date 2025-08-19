"use client";

import { useState } from "react";
import style from "./Navbar.module.css";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "motion/react";
import Link from "next/link";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const [navShadow, setNavShadow] = useState("");
  const { scrollYProgress } = useScroll();
  const { scrollY } = useScroll();
  const smooth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(smooth, "change", (latest) => {
    if (latest > 0.2) {
      setNavStyle(style.sticky);
    } else if (latest < 0.19) {
      setNavStyle("");
    }
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 1) {
      setNavShadow(style.shadow);
    } else {
      setNavShadow("");
    }
  });

  return (
    <section className={`${style["n-wrapper"]} ${navStyle} ${navShadow}`}>
      {/* desktop menu  */}
      <div className={style["nd-container"]}>
        <div className={style["n-container"]}>
          <div className={style["n-menu"]}>
            <div className={style["menu-left"]}>
              <span>FAHADALI</span>
            </div>
            <div className={style["menu-icon"]}>
              {openMobileMenu ? (
                <RxCross2
                  size={30}
                  onClick={() => {
                    setOpenMobileMenu(false);
                    document.body.style.overflow = "";
                  }}
                />
              ) : (
                <BiMenuAltRight
                  size={30}
                  onClick={() => {
                    setOpenMobileMenu(true);
                    document.body.style.overflow = "hidden";
                  }}
                />
              )}
            </div>
            <div className={style["menu-right"]}>
              <div className={style["menu-items"]}>
                <Link href="#what-we-do">
                  <span>What we do</span>
                </Link>
                <Link href="#how-it-work">
                  <span>How it works</span>
                </Link>
                <Link href="#who-we-invest-in">
                  <span>Who we invest in</span>
                </Link>
                <Link href="#testimonials">
                  <span>Testimonials</span>
                </Link>
              </div>
              <div className={style["fund-btn"]}>
                <Link href="#get-funded">
                  <button>Get Funded</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile/tabs menu */}
      <div
        className={style["nm-container"]}
        style={openMobileMenu ? { transform: "translateX(0)" } : {}}
      >
        <div className={style["mobile-menuItems"]}>
          <Link
            href="#what-we-do"
            onClick={() => {
              setOpenMobileMenu(false);
              document.body.style.overflow = "";
            }}
          >
            <span>What we do</span>
          </Link>
          <Link
            href="#our-difference"
            onClick={() => {
              setOpenMobileMenu(false);
              document.body.style.overflow = "";
            }}
          >
            <span>Our Difference</span>
          </Link>
          <Link
            href="#how-it-work"
            onClick={() => {
              setOpenMobileMenu(false);
              document.body.style.overflow = "";
            }}
          >
            <span>How it works</span>
          </Link>
          <Link
            href="#who-we-invest-in"
            onClick={() => {
              setOpenMobileMenu(false);
              document.body.style.overflow = "";
            }}
          >
            <span>Who we invest in</span>
          </Link>
          <Link
            href="#testimonials"
            onClick={() => {
              setOpenMobileMenu(false);
              document.body.style.overflow = "";
            }}
          >
            <span>Testimonials</span>
          </Link>
        </div>
        <div className={style["fund-btn"]}>
          <Link href="#get-funded">
            <button
              onClick={() => {
                setOpenMobileMenu(false);
                document.body.style.overflow = "";
              }}
            >
              Get Funded
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
