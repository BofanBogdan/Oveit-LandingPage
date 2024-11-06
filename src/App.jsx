import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
import SectionOne from "./components/Banner/SectionOne";
import SectionTwo from "./components/Banner/SectionTwo";
import SectionThree from "./components/Banner/SectionThree";
import SectionFour from "./components/Banner/SectionFour";
import SectionFive from "./components/Banner/SectionFive";
import SectionSix from "./components/Banner/SectionSix";
import SectionSeven from "./components/Banner/SectionSeven";
import SectionEight from "./components/Banner/SectionEight";
import SectionNine from "./components/Banner/SectionNine";
// import Customize from "./components/Banner/Customize";
// import Print from "./components/Banner/Print";
import HeroChekin from "./components/Banner/HeroCheckin";

const App = () => {
  return (
    <main>
      <Hero />
      <HeroChekin />
      <Services />
      <SectionOne />
      <Banner />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      {/* <Create />
      <Scan />
      <Customize />
      <Print /> */}
      <Subscribe />
      <Footer />
    </main>
  );
};

export default App;
