import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Create from "./components/Banner/Create";
import Footer from "./components/Footer/Footer";
import Description from "./components/Banner/DescriptionApp";
import LoginBanner from "./components/Banner/LoginBanner";
import Scan from "./components/Banner/Scan";
import Customize from "./components/Banner/Customize";
import Print from "./components/Banner/Print";

const App = () => {
  return (
    <main >
      <Hero />
      <Services />
      <Description />
      <Banner />
      <LoginBanner />
      <Create />
      <Scan />
      <Customize />
      <Print />
      <Subscribe />
      <Footer />
    </main>
  );
};

export default App;
