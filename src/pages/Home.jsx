import React from "react";
import Partner from "../componets/Partner";
import Contact from "../componets/Contact";
import About from "../componets/About";
import Slider from "../componets/Slider";
import Portfolio from "../componets/Portfolio";

const Home = () => {


  return (
    <>
      {/* Start Main Slider */}
      <Slider />
      {/* End Main Slider */}

      {/*Start About Style1 Area*/}
      <About />
      {/*End About Style1 Area*/}

      <Portfolio />

       {/*Start Partner Area*/}
       <Partner />
      {/*End Partner Area*/}

      {/*Start Contact Form Section*/}
      <Contact />
      {/*End Contact Form Section*/}

    </>
  );
};

export default Home;
