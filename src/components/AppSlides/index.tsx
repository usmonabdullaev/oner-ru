import React, { FC } from "react";
import Slider from "react-slick";

import Card from "../Card/index.tsx";

import "./AppSlides.scss";

const AppSlides: FC = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: "head-slider__block",
  };

  return (
    <>
      <div className="app-slides">
        <h5 className="app-slides__title">Рекомендуем</h5>
        <div className="app-slides__slide">
          <Slider {...settings}>
            <Card star={4} />
            <Card star={4} />
            <Card star={4} />
            <Card star={4} />
            <Card star={4} />
            <Card star={4} />
          </Slider>
        </div>
      </div>
      <div className="app-slides">
        <h5 className="app-slides__title">Часто продаваемые</h5>
        <div className="app-slides__slide">
          <Slider {...settings}>
            <Card star={4} />
            <Card star={4} />
            <Card star={4} />
            <Card star={4} />
            <Card star={4} />
            <Card star={4} />
          </Slider>
        </div>
      </div>
    </>
  );
};

export default AppSlides;
