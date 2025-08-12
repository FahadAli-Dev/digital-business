import style from "./WhatWeDo.module.css";
import { features } from "../../utils/data";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <div className={style["wwd-wrapper"]}>
      <div className={style["wwd-container"]}>
        {/* WhatWeDo Head */}
        <div className={style["wwd-head"]}>
          <span className="tag">What we do</span>
          <span className="title">
            Empowering founders with non dilutive capital and execution
            expertise
          </span>
          <span className="des">Here is how we can evaluate</span>
        </div>

        {/* WhatWeDo Blocks */}
        <div className={style["wwd-blocks"]}>
          {/* WhatWeDo Block-1  */}
          <div className={style["wwd-block"]}>
            <span className="sec-title">Blue Adnavces</span>
            <span className="text">
              Fund recurring growth expenses e.g. customer acquisition,
              inventory
            </span>

            {/* WhatWeDo Block Feature-1  */}
            <div className={style["block-features"]}>
              {features.slice(0, 3).map((fea, idx) => {
                return (
                  <div key={idx}>
                    <Image src={fea.icon} alt="img" width={60} height={60} />{" "}
                    <span>{fea.title}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* WhatWeDo Block-2  */}
          <div className={style["wwd-block"]}>
            <span className="sec-title">Blue Seed</span>
            <span className="text">
              Fund one-offs to scale e.g. product, hiring
            </span>

            {/* WhatWeDo Block Feature-2  */}
            <div className={style["block-features"]}>
              {features.slice(3, 6).map((fea, idx) => {
                return (
                  <div key={idx}>
                    <Image src={fea.icon} alt="img" width={60} height={60} />{" "}
                    <span>{fea.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* WhatWeDo Support  */}
        <div className={style["wwd-support"]}>
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
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
