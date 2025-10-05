import React from "react";
import Introduction from "../components/introduction";
import Portada from "../components/portada";
import Options from "../components/options";
import HowItWorks from "../components/howitworks";
import Contact from "../components/contact";
import Carousel from "../components/carousel";

const HomePage = () => {
  return (
    <>
      <Introduction />
      <Portada />
      <Options />
      <Carousel />
      <HowItWorks />
      <Contact />
    </>
  );
};

export default HomePage;
