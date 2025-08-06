import style from "./EmailBox.module.css";
import { LuMail } from "react-icons/lu";

const EmailBox = () => {
  return (
    <div className={style["emailBox"]}>
      <LuMail size={35} />
      <input type="text" placeholder="Enter Email" />
      <button>Get Funded</button>
    </div>
  );
};

export default EmailBox;
