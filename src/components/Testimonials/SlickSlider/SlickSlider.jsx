"use client";

import { testimonialsData } from "@/src/utils/data";
import "./SlickSlider.css";
import Slider from "react-slick";
import Image from "next/image";
import { useEffect, useState } from "react";

const SlickSlider = () => {
  const [settings, setSettings] = useState(null);
  useEffect(() => {
    setSettings({
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow:
        window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3,
      slidesToScroll: 1,
      initialSlide: 0,
      touchMove: true,
      useCSS: true,
      responsive: [
        {
          breakpoint: 1240,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }, []);

  if (!settings) return;

  return (
    <Slider {...settings}>
      {testimonialsData.map((data, idx) => {
        return (
          <div className="comment" key={idx}>
            {/* upperside */}
            <div className="c-content">
              <Image
                src="/Testimonials/apos.svg"
                alt="img"
                width={40}
                height={30}
                style={{ width: "40px", height: "30px" }}
              />
              <span>{data.comment}</span>
            </div>

            {/* lowerside */}
            <div className="c-info">
              <div className="c-icon">{data.name.charAt(0)}</div>
              <div className="c-person">
                <span>{data.name}</span>
                <span>{data.profession}</span>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default SlickSlider;
