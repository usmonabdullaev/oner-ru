import React, { FC } from "react";

type Props = {
  icon: string;
  title: string;
  text: string;
};

const GroupItem: FC<Props> = ({ icon, title, text }) => {
  return (
    <div className="group__item">
      <img src={icon} alt="Icon" className="group__icon" />
      <div className="group__item-group">
        <h5 className="group__title">{title}</h5>
        <p className="group__text">{text}</p>
      </div>
    </div>
  );
};

export default GroupItem;
