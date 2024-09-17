import React from "react";
import MainLayout from "../components/layout/MainLayout";
import Hero from "../components/home/Hero";
import Solution from "../components/home/Solution";
import Portofolio from "../components/home/Portofolio";
import Testimonials from "../components/home/Testimonials";
import Action from "../components/home/Action";
import WorkDesc from "../components/home/WorkDesc";
import FAQ from "../components/home/FAQ";

const Home = () => {
  return (
    <MainLayout>
      <Hero/>
      <Solution/>
      <Portofolio/>
      <Testimonials/>
      <Action/>
      <WorkDesc/>
      <FAQ/>
    </MainLayout>
  );
};

export default Home;
