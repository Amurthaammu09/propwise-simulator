
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  UserPlus, 
  BarChart3, 
  Building2, 
  ChevronRight 
} from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800 rounded-full self-start">
              <span className="mr-1 text-primary">✨</span> AI-Powered Real Estate Investment
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Smarter Investments,<br />
              <span className="text-primary">Higher Returns</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 max-w-lg">
              Leverage AI to optimize your real estate investments with precision market analysis, zoning optimization, and financial planning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white flex items-center"
                onClick={() => navigate("/sign-up")}
              >
                <UserPlus className="mr-2 h-5 w-5" /> Get Started Free
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="flex items-center"
                onClick={() => navigate("/sign-in")}
              >
                Sign In <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6">
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Market Analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <Building2 className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Property Insights</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L19 7V17L12 22L5 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 12L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 12L5 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm font-medium">3D Modeling</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative bg-gradient-to-tr from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl p-2 h-[480px] overflow-hidden z-10">
              <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-20" />
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=3087&auto=format&fit=crop"
                alt="AI Real Estate Investment Platform"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-zinc-900/90 rounded-lg backdrop-blur-sm p-4 border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Investment Opportunity</div>
                    <div className="text-lg font-bold">Manhattan High-Rise</div>
                    <div className="text-primary font-medium">9.2% Projected ROI</div>
                  </div>
                  <div className="bg-primary/10 text-primary font-medium text-sm py-1 px-3 rounded-full">
                    AI Recommended
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/30 dark:bg-primary/20 rounded-full filter blur-3xl opacity-50 z-0" />
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-zinc-300/50 dark:bg-zinc-700/30 rounded-full filter blur-3xl opacity-70 z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
