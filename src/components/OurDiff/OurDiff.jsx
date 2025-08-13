import style from "@/src/components/OurDiff/OurDiff.module.css";
import Image from "next/image";
import { ourDiffFeatures } from "@/src/utils/data";

const OurDiff = () => {
  return (
    <div className={style["od-wrapper"]}>
      <div className={style["od-container"]}>
        <div className={style["od-head"]}>
          <span className="tag">Our difference</span>
          <span className="title">Fair capital, hassle free</span>
          <span className="text">
            Our mission is to level the playing field for early stage growth
            capital. We provide capital that is unbiased, flexible and non
            dilutive with the execution support to accelerate value creation.
          </span>
        </div>

        <div className={style["od-features"]}>
          {ourDiffFeatures.map((fea, idx) => {
            return (
              <div className={style["od-feature"]} key={idx}>
                <Image src={fea.icon} alt="img" width={128} height={128} />
                <span className="sec-title">{fea.title}</span>
                <span className="text">{fea.des}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurDiff;
