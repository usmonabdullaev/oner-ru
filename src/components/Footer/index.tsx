import React, { FC } from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__block">
          <div className="footer__item">
            <h5 className="footer__title">Меню компании</h5>
            <ul className="footer__links">
              <Link to="/catalog" className="footer__link">
                Что такое Oner
              </Link>
              <Link to="/catalog" className="footer__link">
                Реквизиты и информация
              </Link>
              <Link to="/catalog" className="footer__link">
                Новости
              </Link>
              <Link to="/catalog" className="footer__link">
                Вакансии
              </Link>
              <Link to="/catalog" className="footer__link">
                Поставщикам
              </Link>
              <Link to="/catalog" className="footer__link">
                Контакты
              </Link>
            </ul>
          </div>
          <div className="footer__item">
            <h5 className="footer__title">Каталоги</h5>
            <ul className="footer__links">
              <Link to="/catalog" className="footer__link">
                Оригинальные запчасти
              </Link>
              <Link to="/catalog" className="footer__link">
                Неоригинальные запчасти
              </Link>
              <Link to="/catalog" className="footer__link">
                Запчасти для ТО
              </Link>
              <Link to="/catalog" className="footer__link">
                Автомасла
              </Link>
              <Link to="/catalog" className="footer__link">
                Аккумуляторы
              </Link>
              <Link to="/catalog" className="footer__link">
                Распродажа
              </Link>
            </ul>
          </div>
          <div className="footer__item">
            <h5 className="footer__title">Помощь</h5>
            <ul className="footer__links">
              <Link to="/catalog" className="footer__link">
                Часто задаваемые вопросы
              </Link>
              <Link to="/catalog" className="footer__link">
                Консультация Online
              </Link>
              <Link to="/catalog" className="footer__link">
                Оплата заказа
              </Link>
              <Link to="/catalog" className="footer__link">
                Доставка заказа
              </Link>
              <Link to="/catalog" className="footer__link">
                Возврат товара
              </Link>
              <Link to="/catalog" className="footer__link">
                Забыл пароль
              </Link>
            </ul>
          </div>
          <div className="footer__item">
            <h5 className="footer__title">Товары и бренды</h5>
            <ul className="footer__links">
              <Link to="/catalog" className="footer__link">
                Список брендов
              </Link>
              <Link to="/catalog" className="footer__link">
                Популярные товары
              </Link>
              <Link to="/catalog" className="footer__link">
                Наличие на складах
              </Link>
            </ul>
          </div>
          <div className="footer__item">
            <div className="questions">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.97963 4.72497C2.22145 3.32106 3.33735 2.28906 4.74573 2.07476C6.09517 1.86944 7.9464 1.66699 10.0001 1.66699C12.0538 1.66699 13.905 1.86944 15.2544 2.07476C16.6628 2.28906 17.7787 3.32105 18.0205 4.72497C18.1891 5.70342 18.3334 6.94637 18.3334 8.33366C18.3334 9.72095 18.1891 10.9639 18.0205 11.9424C17.7787 13.3463 16.6628 14.3783 15.2544 14.5926C14.0199 14.7804 12.3654 14.9658 10.5201 14.996L5.42402 18.0074C4.86851 18.3356 4.16675 17.9352 4.16675 17.29V14.4536C3.03888 14.0786 2.18721 13.1475 1.97963 11.9424C1.81109 10.9639 1.66675 9.72095 1.66675 8.33366C1.66675 6.94637 1.81109 5.70342 1.97963 4.72497ZM5.00008 6.66699C5.00008 6.20676 5.37318 5.83366 5.83342 5.83366H14.1667C14.627 5.83366 15.0001 6.20676 15.0001 6.66699C15.0001 7.12723 14.627 7.50033 14.1667 7.50033H5.83342C5.37318 7.50033 5.00008 7.12723 5.00008 6.66699ZM5.00008 10.0003C5.00008 9.54009 5.37318 9.16699 5.83342 9.16699H9.16675C9.62699 9.16699 10.0001 9.54009 10.0001 10.0003C10.0001 10.4606 9.62699 10.8337 9.16675 10.8337H5.83342C5.37318 10.8337 5.00008 10.4606 5.00008 10.0003Z"
                  fill="white"
                />
              </svg>
              <div className="questions__group">
                <h5 className="questions__title">Консультация Online</h5>
                <p className="questions__text">Задавайте вопросы</p>
              </div>
            </div>
            <div className="status">
              <div className="status__icon">
                <span></span>
              </div>
              <div className="status__group">
                <h5 className="status__title">
                  Сервис работает в обычном режиме
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">
            Copyright © ООО «Oner.ru» 2021. All rights reserved.
          </p>
          <div className="footer__cards">
            <p className="footer__cards-text">Принимаем к оплате</p>
            <svg
              width="67"
              height="36"
              viewBox="0 0 67 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="67"
                height="36"
                rx="4"
                fill="#F4F6F9"
                fillOpacity="0.15"
              />
              <g clipPath="url(#clip0_8_7790)">
                <path
                  d="M30.2023 25.73H26.4258L28.7878 11.0898H32.5642L30.2023 25.73Z"
                  fill="white"
                />
                <path
                  d="M43.8926 11.4475C43.1477 11.1513 41.9662 10.8242 40.5054 10.8242C36.7759 10.8242 34.1496 12.8177 34.1335 15.6677C34.1025 17.7704 36.0139 18.9383 37.4434 19.6395C38.9044 20.3559 39.401 20.8235 39.401 21.4621C39.3862 22.4429 38.2205 22.895 37.1332 22.895C35.6253 22.895 34.8175 22.6619 33.5897 22.1163L33.0925 21.8823L32.564 25.1687C33.4498 25.5732 35.0817 25.9322 36.7759 25.9478C40.7385 25.9478 43.3183 23.9853 43.3489 20.9481C43.3639 19.2815 42.3547 18.0045 40.1788 16.961C38.858 16.2912 38.049 15.8395 38.049 15.1541C38.0646 14.531 38.7332 13.8928 40.2243 13.8928C41.452 13.8616 42.3541 14.1574 43.0374 14.4534L43.379 14.6089L43.8926 11.4475Z"
                  fill="white"
                />
                <path
                  d="M48.9113 20.5435C49.2223 19.7024 50.4191 16.4473 50.4191 16.4473C50.4034 16.4786 50.7294 15.5907 50.9159 15.0457L51.1798 16.3072C51.1798 16.3072 51.895 19.8115 52.0503 20.5435C51.4602 20.5435 49.6572 20.5435 48.9113 20.5435ZM53.5729 11.0898H50.6518C49.751 11.0898 49.0666 11.3544 48.6779 12.3045L43.0684 25.7297H47.031C47.031 25.7297 47.6834 23.9228 47.8236 23.5336C48.2583 23.5336 52.1131 23.5336 52.6724 23.5336C52.7808 24.0477 53.123 25.7297 53.123 25.7297H56.6197L53.5729 11.0898Z"
                  fill="white"
                />
                <path
                  d="M23.2712 11.0898L19.5727 21.073L19.1685 19.0483C18.4848 16.7121 16.3404 14.1738 13.9473 12.9117L17.3349 25.7144H21.3285L27.2646 11.0898H23.2712Z"
                  fill="white"
                />
                <path
                  d="M16.1382 11.0898H10.0622L10 11.3857C14.7397 12.6006 17.8788 15.529 19.1685 19.0489L17.8476 12.3205C17.6301 11.3854 16.9618 11.1207 16.1382 11.0898Z"
                  fill="#B1B4B9"
                />
              </g>
              <defs>
                <clipPath id="clip0_8_7790">
                  <rect
                    width="47"
                    height="16"
                    fill="white"
                    transform="translate(10 10)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="47"
              height="36"
              viewBox="0 0 47 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="47"
                height="36"
                rx="4"
                fill="#F4F6F9"
                fillOpacity="0.15"
              />
              <g clipPath="url(#clip0_8_7797)">
                <path
                  d="M28.7911 25.8161H20.8296V10.959H28.7911V25.8161Z"
                  fill="#B1B4B9"
                />
                <path
                  d="M20.4332 18C20.4332 15.4483 21.6222 13.1753 23.4738 11.7105C22.1197 10.6393 20.4109 10 18.5538 10C14.1572 10 10.5933 13.5817 10.5933 18C10.5933 22.4184 14.1572 26 18.5538 26C20.4109 26 22.1197 25.3607 23.4738 24.2895C21.6222 22.8247 20.4332 20.5517 20.4332 18Z"
                  fill="#F5F3F0"
                />
                <path
                  d="M36.3473 18C36.3473 22.4184 32.7833 26 28.3867 26C26.5296 26 24.8208 25.3607 23.4663 24.2895C25.3184 22.8247 26.5073 20.5517 26.5073 18C26.5073 15.4483 25.3184 13.1753 23.4663 11.7105C24.8208 10.6393 26.5296 10 28.3867 10C32.7833 10 36.3473 13.5817 36.3473 18Z"
                  fill="#7A7A7E"
                />
              </g>
              <defs>
                <clipPath id="clip0_8_7797">
                  <rect
                    width="27"
                    height="16"
                    fill="white"
                    transform="translate(10 10)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="74"
              height="36"
              viewBox="0 0 74 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="74"
                height="36"
                rx="4"
                fill="#F4F6F9"
                fillOpacity="0.15"
              />
              <g clipPath="url(#clip0_8_7802)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.2336 10.8277C15.7099 10.8248 17.1255 10.6968 17.7251 12.7289C18.129 14.0977 18.7724 16.3398 19.6553 19.4554H20.0148C20.9617 16.1708 21.6122 13.9286 21.9662 12.7289C22.572 10.6756 24.0867 10.8277 24.6926 10.8277L29.3669 10.8277V25.4283H24.6027V16.824H24.2832L21.6273 25.4283H18.0428L15.387 16.8176H15.0675V25.4283H10.3032V10.8277L15.2336 10.8277ZM36.2084 10.8277V19.4385H36.5884L39.819 12.3579C40.4461 10.9489 41.7828 10.8277 41.7828 10.8277H46.3931V25.4284H41.5294V16.8176H41.1493L37.9821 23.8982C37.3549 25.3008 35.955 25.4284 35.955 25.4284H31.3446V10.8277H36.2084ZM63.2046 17.7661C62.5261 19.6966 60.3955 21.0791 58.0367 21.0791H52.936V25.4284H48.3108V17.7661H63.2046Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M58.2594 10.8271H48.0679C48.3104 14.0777 51.0983 16.8605 53.9843 16.8605H63.5255C64.0761 14.1588 62.1807 10.8271 58.2594 10.8271Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_8_7802">
                  <rect
                    width="54"
                    height="16"
                    fill="white"
                    transform="translate(10 10)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="footer__config">
            <p className="footer__config-text">Оферта</p>
            <p className="footer__config-text">Конфиденциальность</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
