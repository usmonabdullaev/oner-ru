import React, { FC } from "react";

import Header from "./components/Header/index.tsx";
import Navigation from "./components/Navigation/index.tsx";
import HeadSlider from "./components/HeadSlider/index.tsx";
import Group from "./components/Group/index.tsx";
import CardGroup1 from "./components/CardGroup1/index.tsx";
import Links from "./components/Links/index.tsx";
import AppSlides from "./components/AppSlides/index.tsx";
import Footer from "./components/Footer/index.tsx";

const App: FC = () => {
  return (
    <>
      <div className="head">
        <Header />
        <Navigation />
      </div>
      <HeadSlider />
      <Group />
      <div
        style={{
          padding: "60px 0",
          marginTop: "40px",
          backgroundColor: "#fff",
        }}
      >
        <div className="container">
          <CardGroup1 />
          <Links />
          <AppSlides />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
