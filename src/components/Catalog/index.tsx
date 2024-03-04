import React, { FC, useEffect, useState } from "react";
import axios from "axios";

import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";
import { setData } from "../../redux/slices/dataSlice.ts";
import Footer from "../Footer/index.tsx";
import Header from "../Header/index.tsx";
import Navigation from "../Navigation/index.tsx";
import CatalogCard from "../CatalogCard/index.tsx";
import Filter from "../Filter/index.tsx";

import "./Catalog.scss";

const Catalog: FC = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const filterValue = useAppSelector((state) => state.filter.value);
  const data = useAppSelector((state) => state.data.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios.get("https://fa24386fc58f895e.mokky.dev/data").then((res) => {
      dispatch(setData(res.data));
    });
  }, [dispatch]);

  return (
    <div>
      <div className="head">
        <Header />
        <Navigation />
      </div>
      <div className="catalog">
        <div className="container">
          <h3 className="catalog__title">Каталог аккумуляторов</h3>
          <div className="catalog__block">
            <div className="catalog__filter">
              <Filter />
            </div>
            <div className="catalog__main">
              {data.map((i) => {
                const start = (pageNumber + 1) * 15 - 15;
                const end = (pageNumber + 1) * 15 + 1;
                if (i.id > start && i.id < end)
                  if (filterValue === "")
                    return <CatalogCard props={i} key={i.id} />;
                  else if (filterValue.split("-").includes(i.name))
                    return <CatalogCard props={i} key={i.id} />;
                return null;
              })}
            </div>
          </div>
          <div className="pagination">
            <div className="pagination__nums">
              <button
                className="pagination__prev"
                onClick={() =>
                  pageNumber !== 0 && setPageNumber(pageNumber - 1)
                }
                disabled={pageNumber === 0}
              >
                Previous
              </button>
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <i
                  className={
                    pageNumber === i
                      ? "pagination__num pagination__num_active"
                      : "pagination__num"
                  }
                  key={i}
                  onClick={() => setPageNumber(i)}
                >
                  {i + 1}
                </i>
              ))}
              <button
                className="pagination__next"
                onClick={() =>
                  pageNumber !== 6 && setPageNumber(pageNumber + 1)
                }
                disabled={pageNumber === 6}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Catalog;
