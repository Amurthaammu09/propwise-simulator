
import React, { useEffect, useRef } from "react";
import PropertyCard from "./PropertyCard";

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    title: "Modern Downtown Tower",
    location: "Financial District, NY",
    price: "$4,250,000",
    roi: "15.7% ROI",
    risk: "low",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
    title: "Riverside Apartments",
    location: "Riverdale, CA",
    price: "$2,850,000",
    roi: "12.4% ROI",
    risk: "medium",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
    title: "Glass Office Building",
    location: "Tech District, WA",
    price: "$7,500,000",
    roi: "18.2% ROI",
    risk: "medium",
  },
];

const MarketAnalysis = () => {
  const marketRef = useRef<HTMLDivElement>(null);

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

    const elements = marketRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="market-analysis"
      ref={marketRef}
      className="py-24 px-6 md:px-10 bg-white dark:bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-full">
              MARKET ANALYSIS
            </span>
          </div>
          <h2 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 mt-4 font-semibold">
            Opportunities You Shouldn't Miss
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 mt-4 text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
            Our AI identifies high-potential investment properties based on market trends, location analysis, and projected growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className={`animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-${
                300 + index * 100
              }`}
            >
              <PropertyCard
                image={property.image}
                title={property.title}
                location={property.location}
                price={property.price}
                roi={property.roi}
                risk={property.risk}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-600">
          <button className="inline-flex items-center justify-center text-zinc-900 dark:text-white hover:text-zinc-600 dark:hover:text-zinc-300 font-medium transition-colors">
            View All Properties
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MarketAnalysis;
