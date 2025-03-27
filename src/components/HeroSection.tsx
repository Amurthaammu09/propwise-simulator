
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-10 overflow-hidden bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-2">
              <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-full">
                  AI-POWERED REAL ESTATE INVESTMENTS
                </span>
              </div>
              <h1 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 font-semibold leading-tight text-balance">
                Reimagine Real Estate
                <br /> 
                <span className="text-gradient">Investment Decisions</span>
              </h1>
              <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300 text-xl text-zinc-600 dark:text-zinc-300 max-w-xl mt-4 text-balance">
                Leverage AI to optimize resale value, rental yield, and
                maintenance costs with precision forecasting and scenario planning.
              </p>
            </div>
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400 flex flex-col sm:flex-row gap-4">
              <Button className="bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-6 h-auto text-base">
                Start Free Trial
              </Button>
              <Button variant="outline" className="px-6 py-6 h-auto text-base">
                Book a Demo
              </Button>
            </div>
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-500 pt-4">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Trusted by industry leaders
              </p>
              <div className="flex flex-wrap items-center gap-6 mt-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 bg-zinc-200 dark:bg-zinc-800 rounded-md opacity-50 w-24"
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-600 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-100/80 to-transparent dark:from-zinc-800/80 dark:to-transparent z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a"
                  alt="Modern building visualization"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-xl z-20 max-w-xs animate-float glass-card">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-zinc-100 dark:bg-zinc-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">ROI Forecast</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      15.7% predicted annual return for this property
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-xl z-20 max-w-xs animate-float glass-card">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-zinc-100 dark:bg-zinc-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Optimal Zoning</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      Mixed-use development recommendation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
