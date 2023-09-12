import React from "react";

import HeaderMain from "../Header/HeaderMain";
import Promo from "./Promo/Promo";
import NavTab from "./NavTab/NavTab";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <>
      <HeaderMain />
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <Footer />
    </>
  );
}

export default Main;
