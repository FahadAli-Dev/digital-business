import style from "@/src/components/HowItWorks/HowItWorks.module.css";
import { HowItWork } from "@/src/utils/data";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <div className={style["hiw-wrapper"]}>
      <div className={style["hiw-container"]}>
        <div className={style["hiw-head"]}>
          <span className="tag">How it works</span>
          <span className="title">
            Unlocking potential along the growth journey
          </span>
        </div>
        <div className={style["hiw-features"]}>
          {HowItWork.map((fea, idx) => {
            return (
              <div className={style["hiw-feature"]} key={idx}>
                <div className={style["detail"]}>
                  <span className="des">0{idx + 1}</span>
                  <span className="sec-title">{fea.title}</span>
                  <span className="text">{fea.des}</span>
                </div>
                <div className={style["icon"]}>
                  <Image src={fea.icon} alt="img" width={128} height={128} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
