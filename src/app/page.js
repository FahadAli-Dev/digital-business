import style from "./page.module.css";
import Navbar from "../components/Navbar/Navbar.jsx";
const page = () => {
  return (
    <div className={style.app}>
      <Navbar />
    </div>
  );
};

export default page;
