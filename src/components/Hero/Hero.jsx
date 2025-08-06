import EmailBox from "../EmailBox/EmailBox";
import style from "./Hero.module.css";
import { heroData } from "../../utils/data";
import Image from "next/image";
const Hero = () => {
  return (
    <div className={style["hero-wrapper"]}>
      <div className={style["hero-container"]}>
        <div className={style["hero-left"]}>
          {heroData.map((v, i) => {
            console.log(v);
            return (
              <div
                key={i}
                style={{ backgroundColor: `${v.bg}` }}
                className={style["img-container"]}
              >
                <Image
                  className={style["hero-img"]}
                  src={v.src}
                  quality={100}
                  fill
                  alt="img"
                  style={{
                    objectFit: "cover",
                    marginTop: "2.1rem",
                    transform: "scale(1.2)",
                    overflow: "hidden",
                  }}
                />
              </div>
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
  );
};

export default Hero;
