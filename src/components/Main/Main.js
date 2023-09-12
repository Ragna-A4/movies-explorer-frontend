import React from "react";

import HeaderMain from "../Header/HeaderMain";
import Promo from "./Promo/Promo";
import NavTab from "./NavTab/NavTab";
import AboutProject from "./AboutProject/AboutProject";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <>
      <HeaderMain />
      <Promo />
      <NavTab />
      <AboutProject />
      <Footer />
    </>
  );
}

export default Main;
