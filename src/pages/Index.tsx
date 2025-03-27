
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import FinancialInsights from "@/components/FinancialInsights";
import MarketAnalysis from "@/components/MarketAnalysis";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 overflow-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <FeatureSection />
        <FinancialInsights />
        <MarketAnalysis />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
