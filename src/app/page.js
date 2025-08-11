import style from "./page.module.css";
import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero";
import BrandingVideo from "../components/BrandingVideo/BrandingVideo";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
const page = () => {
  return (
    <div className={style.app}>
      <Navbar />
      <Hero />
      <BrandingVideo />
      <WhatWeDo />
    </div>
  );
};

export default page;
