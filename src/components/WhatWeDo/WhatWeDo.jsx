import style from "./WhatWeDo.module.css";

const WhatWeDo = () => {
  return (
    <div className={style["wwd-wrapper"]}>
      <div className={style["wwd-container"]}>
        <div className={style["wwd-head"]}>
          <span className="tag">What we do</span>
          <span className="title">
            Empowering founders with non dilutive capital and execution
            expertise
          </span>
          <span className="des">Here is how we can evaluate</span>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
