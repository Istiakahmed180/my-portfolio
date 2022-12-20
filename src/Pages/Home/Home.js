import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Intro from "../Intro/Intro";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";
import Testimonial from "../Testimonials/Testimonials";
import Works from "../Works/Works";
const Home = () => {
  return (
    <div>
      <Intro></Intro>
      <Services></Services>
      <Works></Works>
      <Portfolio></Portfolio>
      <About></About>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
};

export default Home;
