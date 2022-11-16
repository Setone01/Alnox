import React from "react";
import Lodge from "../component/store/Lodge";
import Center from "../component/center/Center";
import Service from "../component/search/Service";
import Footer from "../component/footer/Footer";
// import LodgeDetail from "../component/store/LodgeDetail";
import Header from "../component/header/Header";
import Newsletter from "../component/newsletter/Newsletter";
// import Testimonial from "../component/testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Header />
      <Lodge />
      <Center />
      <Service />
      {/* <Testimonial /> */}
      <Newsletter />
      {/* <LodgeDetail /> */}
      <Footer />
    </>
  );
};

export default Home;