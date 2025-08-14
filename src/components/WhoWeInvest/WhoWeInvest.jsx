import { whoWeInvest } from "@/src/utils/data";
import style from "./WhoWeInvest.module.css";
import Image from "next/image";

const WhoWeInvest = () => {
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
            width={600}
            height={556}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default WhoWeInvest;
