import style from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={style["hero-wrapper"]}>
      <div className={style["hero-container"]}>
        <div className={style["hero-left"]}>hero-left</div>
        <div className={style["hero-right"]}>hero-right</div>
      </div>
    </div>
  );
};

export default Hero;
