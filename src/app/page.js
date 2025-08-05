import style from "./page.module.css";
import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero";
const page = () => {
  return (
    <div className={style.app}>
      <Navbar />
      <Hero />
    </div>
  );
};

export default page;
