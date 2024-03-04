import React, { FC, useState } from "react";

import { useAppSelector, useAppDispatch } from "../../redux/hooks.ts";
import { setFilter } from "../../redux/slices/filterSlice.ts";

interface PropTypes {
  props: {
    name: string;
    type: string;
    values: string[];
    search?: boolean;
  };
}

const FilterItem: FC<PropTypes> = ({ props }) => {
  const filterValue = useAppSelector((state) => state.filter.value);
  const dispatch = useAppDispatch();
  const { name, type, values, search } = props;
  const [opened, setOpened] = useState(true);

  return (
    <div className={opened ? "filter-item" : "filter-item filter-item_closed"}>
      <div className="filter-item__header">
        <h5 className="filter-item__title">{name}</h5>
        <div>
          <svg
            onClick={() => (opened ? setOpened(false) : setOpened(true))}
            className={opened ? "" : "closed"}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 10L12 14L16 10"
              stroke="#55556D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {search && (
        <input
          type="text"
          placeholder="Быстрый поиск"
          className="filter-item__search"
        />
      )}
      {type === "checkbox" ? (
        values.map((i, index) => (
          <div key={index} className="filter-item__checkbox">
            <i
              className="filter-item__checkbox-item"
              onClick={(e: any) => {
                e.target.classList.toggle("filter-item__checkbox-item_active");
                console.log(filterValue);
                name === "Бренд" &&
                e.target.classList.value.includes(
                  "filter-item__checkbox-item_active"
                )
                  ? !filterValue.includes(i) &&
                    dispatch(setFilter((filterValue + "-" + i).trim()))
                  : dispatch(
                      setFilter(
                        filterValue
                          .split("-")
                          .filter((j) => j !== i)
                          .join("-")
                          .trim()
                      )
                    );
                console.log(filterValue);
              }}
            >
              +
            </i>
            <p>{i}</p>
          </div>
        ))
      ) : (
        <div className="filter-item__range">
          <input
            type="number"
            min={Number(values[0])}
            placeholder={`от ${values[0]}`}
          />
          <input
            type="number"
            max={Number(values[1])}
            placeholder={`до ${values[1]}`}
          />
        </div>
      )}
    </div>
  );
};

export default FilterItem;
