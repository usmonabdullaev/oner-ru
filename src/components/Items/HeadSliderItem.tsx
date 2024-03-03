import React, { FC } from "react";

const HeadSliderItem: FC = () => {
  return (
    <div className="head-slider__item">
      <div className="head-slider__texts">
        <h2 className="head-slider__title">
          Оригинальные автомасла cо скидкой <span>15%</span>
        </h2>
        <p className="head-slider__text">Акция действует с 1 по 30 июня 2021</p>
      </div>
    </div>
  );
};

export default HeadSliderItem;
