import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
import CTASection from "../../components/CTASection/CTASection";
import HowItWorksSection from "../../components/HowItWorksSection/HowItWorksSection";

import LandingPageBanner from "./LandingPageBanner";
import style from "./landingPage.module.css";

const LandingPage = () => {
  return (
    <div className={style.landingPage}>
      <NavBar />
      <LandingPageBanner />
      {/* <HeroSection /> */}
      <HowItWorksSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;
