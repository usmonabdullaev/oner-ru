import React, { FC } from "react";
import Slider from "react-slick";

import HeadSliderItem from "../Items/HeadSliderItem.tsx";

import "./HeadSlider.scss";

const HeadSlider: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "head-slider__block",
  };

  return (
    <div className="head-slider">
      <div className="container">
        <Slider {...settings}>
          <HeadSliderItem />
          <HeadSliderItem />
          <HeadSliderItem />
        </Slider>
      </div>
    </div>
  );
};

export default HeadSlider;
