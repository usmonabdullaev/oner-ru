import React, { FC } from "react";

import Card from "../Card/index.tsx";

import "./CardGroup1.scss";

const CardGroup1: FC = () => {
  return (
    <div className="card-group-1">
      <div className="card-group-1__custom-card">
        <h5>Автомасла №1 от официальных дилеров</h5>
      </div>
      <Card star={3} />
      <Card star={4} />
      <Card star={5} />
    </div>
  );
};

export default CardGroup1;
