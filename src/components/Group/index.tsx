import React, { FC } from "react";

import GroupItem from "../Items/GroupItem.tsx";
import {
  group1,
  group2,
  group3,
  group4,
  group5,
  group6,
  group7,
  group8,
  group9,
  group10,
  group11,
  group12,
} from "../../assets/images/index.ts";

import "./Group.scss";

const Group: FC = () => {
  const groups = [
    {
      icon: group1,
      title: "Оригинальные запчасти",
      text: "730 товаров",
    },
    {
      icon: group2,
      title: "Неоригинальные запчасти",
      text: "278 товаров",
    },
    {
      icon: group3,
      title: "Запчасти ВАЗ, ГАЗ, КАМАЗ",
      text: "730 товаров",
    },
    {
      icon: group4,
      title: "Кузовные запчасти",
      text: "730 товаров",
    },
    {
      icon: group5,
      title: "Запчасти для ТО",
      text: "730 товаров",
    },
    {
      icon: group6,
      title: "Автостёкла",
      text: "730 товаров",
    },
    {
      icon: group7,
      title: "Автомасла",
      text: "730 товаров",
    },
    {
      icon: group8,
      title: "Автохимия",
      text: "730 товаров",
    },
    {
      icon: group9,
      title: "Диски",
      text: "730 товаров",
    },
    {
      icon: group10,
      title: "Аккумуляторы",
      text: "730 товаров",
    },
    {
      icon: group11,
      title: "Автолампы",
      text: "730 товаров",
    },
    {
      icon: group12,
      title: "Поставщикам",
      text: "730 товаров",
    },
  ];
  return (
    <div className="group">
      <div className="container">
        <div className="group__block">
          {groups.map((i, index) => (
            <GroupItem
              key={index}
              icon={i.icon}
              title={i.title}
              text={i.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Group;
