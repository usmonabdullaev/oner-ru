import React, { FC } from "react";
import { Link } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../redux/hooks.ts";
import { setState } from "../../redux/slices/headerSlice.ts";

import {
  logo,
  searchIcon,
  locationIcon,
  phoneIcon,
  userIcon,
} from "../../assets/images/index.ts";

import "./Header.scss";

const Header: FC = () => {
  const inputState = useAppSelector((state) => state.header.value);
  const dispatch = useAppDispatch();

  return (
    <div className="header">
      <div className="container">
        <div className="header__block">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" className="logo__img" />
            </Link>
          </div>
          <label className={inputState ? "input input_focus" : "input"}>
            <input
              onFocus={() => dispatch(setState(true))}
              onBlur={() => dispatch(setState(false))}
              type="text"
              placeholder="Введите номер запчасти или VIN"
              className="input__input"
              id="header-input"
            />
            <img src={searchIcon} alt="Search" className="input__icon" />
          </label>
          <div className="location">
            <img src={locationIcon} alt="Location" className="location__icon" />
            <p className="location__text">Душанбе</p>
          </div>
          <a className="phone" href="tel:+992887422929">
            <img src={phoneIcon} alt="Phone" className="phone__icon" />
            <span className="phone__text">+992 (88) 742-29-29</span>
          </a>
          <div className="form">
            <img src={userIcon} alt="User" className="form__icon" />
            <div className="form__text form__text_login">Вход</div>
            <span className="form__text">/</span>
            <div className="form__text form__text_registration">
              Регистрация
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
