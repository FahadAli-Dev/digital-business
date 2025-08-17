import EmailBox from "../EmailBox/EmailBox";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div id="get-funded" className={style["f-wrapper"]}>
      <div className={style["f-container"]}>
        <span className="title">Get Funded Today!</span>
        <div>
          <EmailBox />
        </div>
        <hr />
        <div className={style["f-menu"]}>
          <span>Home</span>
          <span>what we do</span>
          <span>how it works</span>
          <span>who we invest in</span>
          <span>testimonials</span>
        </div>
        <hr />
        <span className="text">© 2025 FAHADALI. All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
