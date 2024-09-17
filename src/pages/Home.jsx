import React from "react";
import MainLayout from "../components/layout/MainLayout";
import Hero from "../components/home/Hero";
import Solution from "../components/home/Solution";
import Investor from "../components/home/Investor";
import Proof from "../components/home/Proof";
import Startup from "../components/home/Startup";
import WorkDesc from "../components/home/WorkDesc";
import FAQ from "../components/home/FAQ";
import Testimonial from "../components/home/Testimonial";
import JoinUs from "../components/home/JoinUs";

const Home = () => {
  return (
    <MainLayout>
      <Hero/>
      <Solution/>
      <Investor/>
      <Proof/>
      <Startup/>
      <Testimonial/>
      <WorkDesc/>
      <JoinUs/>
      <FAQ/>
    </MainLayout>
  );
};

export default Home;
