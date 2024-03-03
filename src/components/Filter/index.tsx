import React, { FC } from "react";

import FilterItem from "./FilterItem.tsx";

import "./Filter.scss";

const Filter: FC = () => {
  const filters = [
    {
      name: "Бренд",
      type: "checkbox",
      values: ["Bosch", "Bosch 24", "Varta"],
      search: true,
    },
    {
      name: "Емкость батареи, А/ч",
      type: "range",
      values: ["30", "430"],
    },
    {
      name: "Клеммы",
      type: "checkbox",
      values: ["1", "1/3", "21", "3 (JIS)", "8"],
    },
    {
      name: "Напряжение, В",
      type: "checkbox",
      values: ["12", "6"],
    },
    {
      name: "Номинальная мощность, Вт",
      type: "range",
      values: ["290", "2400"],
    },
    {
      name: "Расположение полюсных выводов",
      type: "checkbox",
      values: ["0 (обратная)", "1 (прямая)", "3", "6", "9"],
    },
    {
      name: "Серия",
      type: "checkbox",
      values: ["0 (обратная)", "1 (прямая)", "3", "6", "9"],
    },
  ];
  return (
    <div className="filter">
      {filters.map((i, index) => (
        <FilterItem key={index} props={i} />
      ))}
      <button className="filter__reset">
        Сбросить фильтры
      </button>
    </div>
  );
};

export default Filter;
