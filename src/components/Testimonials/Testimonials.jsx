import SlickSlider from "./SlickSlider/SlickSlider";
import style from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <div id="testimonials" className={style["t-wrapper"]}>
      <div className={style["t-container"]}>
        <div className={style["t-head"]}>
          <span className="tag">Testimonials</span>
          <span className="title">
            Access Capital That Complements Traditional Funding Options
          </span>
          <span className="des">What people say about us</span>
        </div>
        <SlickSlider />
      </div>
    </div>
  );
};

export default Testimonials;
