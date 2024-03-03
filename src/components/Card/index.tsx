import React, { FC, Fragment } from "react";

import { cardImg } from "../../assets/images/index.ts";
import { useAppDispatch } from "../../redux/hooks.ts";
import { add, remove } from "../../redux/slices/cartSlice.ts";

import "./Card.scss";

type StarProps = { ok: boolean };
type CardProps = { star: number };

const Star: FC<StarProps> = ({ ok }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.71215 0.58985L8.21558 3.76128L11.2944 4.08785C11.4503 4.10297 11.5981 4.16419 11.719 4.2637C11.8399 4.3632 11.9284 4.49648 11.9732 4.64651C12.018 4.79654 12.017 4.95652 11.9705 5.10602C11.9239 5.25552 11.8339 5.38776 11.7119 5.48585L9.25701 7.50442L10.0164 10.8979C10.0504 11.0487 10.0392 11.2062 9.98425 11.3507C9.92931 11.4952 9.83307 11.6203 9.70751 11.7105C9.58195 11.8007 9.43262 11.852 9.27813 11.8579C9.12364 11.8638 8.97083 11.8242 8.83873 11.7439L5.99987 10.0167L3.15844 11.743C3.02627 11.8232 2.87346 11.8627 2.719 11.8567C2.56454 11.8507 2.41524 11.7995 2.28967 11.7094C2.16409 11.6192 2.06778 11.4942 2.0127 11.3497C1.95762 11.2053 1.9462 11.0479 1.97987 10.897L2.74273 7.50442L0.287869 5.48585C0.166687 5.38749 0.0774569 5.25534 0.0315014 5.10619C-0.014454 4.95703 -0.015063 4.79758 0.0297519 4.64807C0.0745667 4.49857 0.162785 4.36575 0.283213 4.26646C0.40364 4.16718 0.550847 4.1059 0.706155 4.09042L3.78416 3.76385L5.28758 0.58985C5.35158 0.45513 5.45248 0.341321 5.57855 0.261634C5.70463 0.181947 5.85072 0.139648 5.99987 0.139648C6.14902 0.139648 6.29511 0.181947 6.42119 0.261634C6.54726 0.341321 6.64816 0.45513 6.71215 0.58985Z"
        fill={ok ? "#ff9431" : "#c5c3c8"}
      />
    </svg>
  );
};

const Card: FC<CardProps> = ({ star }) => {
  const Stars = new Array(star).fill(<Star ok={true} />);
  const OtherStars = new Array(5 - star).fill(<Star ok={false} />);

  const dispatch = useAppDispatch();

  const onClick = (e: any) => {
    let added: boolean = false;
    let el: HTMLDivElement = e.target;

    const helper = (classValue: string) => {
      if (classValue.includes("card__btn_active")) added = true;
      else added = false;
    };

    if (e.target.tagName.toLowerCase() === "div") {
      helper(e.target.classList.value);
    } else if (e.target.tagName.toLowerCase() === "svg") {
      el = e.target.parentElement;
      helper(e.target.parentElement.classList.value);
    } else {
      el = e.target.parentElement.parentElement;
      helper(e.target.parentElement.parentElement.classList.value);
    }

    added ? dispatch(remove()) : dispatch(add());
    el.classList.toggle("card__btn_active");
  };

  return (
    <div className="card">
      <div>
        <img src={cardImg} alt="Card" className="card__img" />
      </div>
      <div className="card__info-group">
        <span className="card__id">Артикул: 153789</span>
        <div className="card__rating-group">
          <div className="card__stars">
            {Stars.map((i, index) => (
              <Fragment key={index}>{i}</Fragment>
            ))}
            {OtherStars.map((i, index) => (
              <Fragment key={index}>{i}</Fragment>
            ))}
          </div>
          <div className="card__rating">
            <span>{star}.0</span>
            <span>(51)</span>
          </div>
        </div>
      </div>
      <p className="card__title">
        Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.
      </p>
      <div className="card__footer">
        <p className="card__price">
          2 334 ₽
          <sup>
            <s>2 864 ₽</s>
          </sup>
        </p>
        <div className="card__btn c" onClick={(e) => onClick(e)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.87402 7L7.40902 14.246C7.62002 15.244 8.54902 15.923 9.56502 15.822L16.381 15.14C17.221 15.056 17.917 14.454 18.122 13.635L19.47 8.243C19.628 7.611 19.151 7 18.5 7H10.187"
              stroke="#2E1066"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.87402 7L7.40902 14.246C7.62002 15.244 8.54902 15.923 9.56502 15.822L16.381 15.14C17.221 15.056 17.917 14.454 18.122 13.635L19.47 8.243C19.628 7.611 19.151 7 18.5 7H10.187"
              stroke="#410F9E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.87402 7L7.40902 14.246C7.62002 15.244 8.54902 15.923 9.56502 15.822L16.381 15.14C17.221 15.056 17.917 14.454 18.122 13.635L19.47 8.243C19.628 7.611 19.151 7 18.5 7H10.187"
              stroke="#453888"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.87402 7L7.40902 14.246C7.62002 15.244 8.54902 15.923 9.56502 15.822L16.381 15.14C17.221 15.056 17.917 14.454 18.122 13.635L19.47 8.243C19.628 7.611 19.151 7 18.5 7H10.187"
              stroke="#5946D7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.874 7L5.224 4H3.5"
              stroke="#2E1066"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.874 7L5.224 4H3.5"
              stroke="#410F9E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.874 7L5.224 4H3.5"
              stroke="#453888"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.874 7L5.224 4H3.5"
              stroke="#5946D7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.1088 19.2668C16.9068 19.2668 16.7428 19.4308 16.7448 19.6328C16.7448 19.8348 16.9088 19.9988 17.1108 19.9988C17.3128 19.9988 17.4768 19.8348 17.4768 19.6328C17.4758 19.4308 17.3118 19.2668 17.1088 19.2668"
              stroke="#2E1066"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.1088 19.2668C16.9068 19.2668 16.7428 19.4308 16.7448 19.6328C16.7448 19.8348 16.9088 19.9988 17.1108 19.9988C17.3128 19.9988 17.4768 19.8348 17.4768 19.6328C17.4758 19.4308 17.3118 19.2668 17.1088 19.2668"
              stroke="#410F9E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.1088 19.2668C16.9068 19.2668 16.7428 19.4308 16.7448 19.6328C16.7448 19.8348 16.9088 19.9988 17.1108 19.9988C17.3128 19.9988 17.4768 19.8348 17.4768 19.6328C17.4758 19.4308 17.3118 19.2668 17.1088 19.2668"
              stroke="#453888"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.1088 19.2668C16.9068 19.2668 16.7428 19.4308 16.7448 19.6328C16.7448 19.8348 16.9088 19.9988 17.1108 19.9988C17.3128 19.9988 17.4768 19.8348 17.4768 19.6328C17.4758 19.4308 17.3118 19.2668 17.1088 19.2668"
              stroke="#5946D7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.69724 19.2673C8.49524 19.2673 8.33124 19.4313 8.33324 19.6333C8.33124 19.8363 8.49624 20.0003 8.69824 20.0003C8.90024 20.0003 9.06424 19.8363 9.06424 19.6343C9.06424 19.4313 8.90024 19.2673 8.69724 19.2673"
              stroke="#2E1066"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.69724 19.2673C8.49524 19.2673 8.33124 19.4313 8.33324 19.6333C8.33124 19.8363 8.49624 20.0003 8.69824 20.0003C8.90024 20.0003 9.06424 19.8363 9.06424 19.6343C9.06424 19.4313 8.90024 19.2673 8.69724 19.2673"
              stroke="#410F9E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.69724 19.2673C8.49524 19.2673 8.33124 19.4313 8.33324 19.6333C8.33124 19.8363 8.49624 20.0003 8.69824 20.0003C8.90024 20.0003 9.06424 19.8363 9.06424 19.6343C9.06424 19.4313 8.90024 19.2673 8.69724 19.2673"
              stroke="#453888"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.69724 19.2673C8.49524 19.2673 8.33124 19.4313 8.33324 19.6333C8.33124 19.8363 8.49624 20.0003 8.69824 20.0003C8.90024 20.0003 9.06424 19.8363 9.06424 19.6343C9.06424 19.4313 8.90024 19.2673 8.69724 19.2673"
              stroke="#5946D7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Card;
