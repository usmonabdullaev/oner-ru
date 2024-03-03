import React, { FC } from "react";

import { add, remove } from "../../redux/slices/cartSlice.ts";
import { useAppDispatch } from "../../redux/hooks.ts";

import "./CatalogCard.scss";

type PropsType = {
  props: {
    id: number;
    image: string;
    name: string;
    text: string;
    artikul: number;
    price: number;
    voltage: number;
    capacity: number;
    conclusions: string;
    terminals: string;
  };
};

const CatalogCard: FC<PropsType> = ({ props }) => {
  const dispatch = useAppDispatch();

  const onClick = (e: any) => {
    String(e.target.classList.value).includes("catalog-item__price_added")
      ? dispatch(remove())
      : dispatch(add());
    e.target.classList.toggle("catalog-item__price_added");
  };
  return (
    <div
      style={{ position: "relative", height: "380px", zIndex: 150 - props.id }}
    >
      <div className="catalog-item">
        <div className="catalog-item__img-block">
          <img src={props.image} alt="Product" className="catalog-item__img" />
        </div>
        <h4 className="catalog-item__name">{props.name}</h4>
        <p className="catalog-item__text">
          {props.text}
          <br />
          {props.voltage}в {props.capacity}а/ч
        </p>
        <p className="catalog-item__artikul">
          Артикул: <span>{props.artikul}</span>
        </p>
        <div className="catalog-item__price" onClick={(e) => onClick(e)}>
          Цены от {props.price} ₽
        </div>
        <div className="catalog-item__info-block">
          <p className="catalog-item__primary-text">
            Напряжение, B: <span>{props.voltage}</span>
          </p>
          <p className="catalog-item__primary-text">
            Емкость батареи, B: <span>{props.capacity}</span>
          </p>
          <p className="catalog-item__primary-text">
            Расположение полюсных
            <br />
            выводов, B: <span>{props.conclusions}</span>
          </p>
          <p className="catalog-item__primary-text">
            Клеммы, B: <span>{props.terminals}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CatalogCard;
