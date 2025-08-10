import style from "./page.module.css";
import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero";
import BrandingVideo from "../components/BrandingVideo/BrandingVideo";
const page = () => {
  return (
    <div className={style.app}>
      <Navbar />
      <Hero />
      <BrandingVideo />
    </div>
  );
};

export default page;
