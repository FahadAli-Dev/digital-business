import { whoWeInvest } from "@/src/utils/data";
import style from "./WhoWeInvest.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

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
            <span className="tag">Who we invest in</span>
            <span className="title">
              Digital businesses <br /> with early traction
            </span>
          </div>
          <div className={style["wwi-details"]}>
            {whoWeInvest.map((dea, idx) => {
              return (
                <div className={style["wwi-detail"]} key={idx}>
                  <span className="des">{dea.title}</span>
                  <span className="text">{dea.des}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* right side  */}
        <div className={style["wwi-right"]}>
          <Image
            src="/WhoWeInvest/persons.png"
            alt="person"
            // width={600}
            // height={720}
            fill
            sizes="600"
            style={{
              objectFit: "contain",
              marginTop: `${
                width > 1240 ? "3.3rem" : width > 1024 ? "6.7rem" : ""
              }`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default WhoWeInvest;
