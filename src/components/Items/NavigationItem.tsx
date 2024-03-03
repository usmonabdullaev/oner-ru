import React, { FC } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";
import { setItem } from "../../redux/slices/navigationSlice.ts";
import CategoriesSvg from "../Icons/CategoriesSvg.tsx";
import CartIcon from "../Icons/CartIcon.tsx";

type Props = {
  icon: undefined | string;
  text: string;
  num: undefined | boolean;
  index: number;
};

const NavigationItem: FC<Props> = ({ icon, text, num, index }) => {
  const activeItem = useAppSelector((state) => state.navigation.value);
  const cart = useAppSelector((state) => state.cart.value);
  const dispatch = useAppDispatch();

  const active = activeItem === index;

  return (
    <Link to="/catalog">
      <div
        className={
          active ? "navigation-item navigation-item_active" : "navigation-item"
        }
        onClick={() => index !== 7 && dispatch(setItem(index))}
      >
        {icon !== undefined ? (
          icon === "cartIcon" ? (
            <CartIcon state="#5946d7" />
          ) : (
            <CategoriesSvg state={active ? "white" : "#5946d7"} />
          )
        ) : null}
        <span className="navigation-item__text">{text}</span>
        {num && <span className="navigation-item__span">{cart}</span>}
      </div>
    </Link>
  );
};

export default NavigationItem;
