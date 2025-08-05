"use client";

import { useState } from "react";
import style from "./Navbar.module.css";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  return (
    <section className={style["n-wrapper"]}>
      {/* desktop menu  */}
      <div className={style["nd-container"]}>
        <div className={style["n-container"]}>
          <div className={style["n-menu"]}>
            <div className={style["menu-left"]}>
              <span>FAHADALI</span>
            </div>
            <div className={style["menu-icon"]}>
              {openMobileMenu ? (
                <RxCross2 size={30} onClick={() => setOpenMobileMenu(false)} />
              ) : (
                <BiMenuAltRight
                  size={30}
                  onClick={() => setOpenMobileMenu(true)}
                />
              )}
            </div>
            <div className={style["menu-right"]}>
              <div className={style["menu-items"]}>
                <span>What we do</span>
                <span>How it works</span>
                <span>Who we invest in</span>
                <span>Testimonials</span>
              </div>
              <div className={style["fund-btn"]}>
                <button>Get Funded</button>
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
          <span>What we do</span>
          <span>How it works</span>
          <span>Who we invest in</span>
          <span>Testimonials</span>
        </div>
        <div className={style["fund-btn"]}>
          <button>Get Funded</button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
