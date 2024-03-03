import React, { FC } from "react";

import NavigationItem from "../Items/NavigationItem.tsx";

import "./Navigation.scss";

const Navigation: FC = () => {
  const categories = [
    {
      icon: "categoriesSvg",
      value: "Все категории",
    },
    {
      value: "Запчасти для ТО",
    },
    {
      value: "Автомасла",
    },
    {
      value: "Оригинальные запчасти",
    },
    {
      value: "Неоригинальные запчасти",
    },
    {
      value: "Лампочки",
    },
    {
      value: "Аккумуляторы",
    },
    {
      num: true,
      icon: "cartIcon",
      value: "Корзина",
    },
  ];

  return (
    <div className="navigation">
      <div className="container">
        <div className="navigation__block">
          {categories.map((i, index) => (
            <NavigationItem
              key={index}
              icon={i.icon}
              text={i.value}
              num={i.num}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
