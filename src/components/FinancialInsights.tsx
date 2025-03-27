
import React, { useEffect, useRef } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", roi: 7.2, benchmark: 5.5 },
  { name: "Feb", roi: 8.5, benchmark: 5.8 },
  { name: "Mar", roi: 7.8, benchmark: 6.2 },
  { name: "Apr", roi: 9.1, benchmark: 6.0 },
  { name: "May", roi: 11.2, benchmark: 6.5 },
  { name: "Jun", roi: 12.5, benchmark: 7.0 },
  { name: "Jul", roi: 14.0, benchmark: 7.3 },
  { name: "Aug", roi: 15.2, benchmark: 7.6 },
  { name: "Sep", roi: 16.5, benchmark: 7.8 },
  { name: "Oct", roi: 15.8, benchmark: 7.5 },
  { name: "Nov", roi: 17.2, benchmark: 7.9 },
  { name: "Dec", roi: 18.4, benchmark: 8.1 },
];

const metrics = [
  { label: "Average ROI", value: "15.7%", trend: "+2.3%" },
  { label: "Risk Factor", value: "Low", trend: "-15%" },
  { label: "Tax Savings", value: "$24,500", trend: "+8%" },
  { label: "Projected Growth", value: "8.3%", trend: "+1.2%" },
];

const FinancialInsights = () => {
  const insightsRef = useRef<HTMLDivElement>(null);

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

    const elements = insightsRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="financial-insights"
      ref={insightsRef}
      className="py-24 px-6 md:px-10 bg-zinc-50 dark:bg-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-full">
              FINANCIAL INSIGHTS
            </span>
          </div>
          <h2 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 mt-4 font-semibold">
            AI-Powered Financial Analytics
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 mt-4 text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
            Leverage advanced AI algorithms to forecast ROI, optimize tax strategies, and minimize investment risks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300 glass-card rounded-xl p-6">
            <h3 className="text-xl font-medium mb-6">Return on Investment Forecast</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="roiGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3f3f46" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3f3f46" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="benchmarkGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#94a3b8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="name" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      borderRadius: "0.5rem",
                      border: "none",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="roi"
                    stroke="#3f3f46"
                    fillOpacity={1}
                    fill="url(#roiGradient)"
                    name="AI-Optimized ROI"
                  />
                  <Area
                    type="monotone"
                    dataKey="benchmark"
                    stroke="#94a3b8"
                    fillOpacity={1}
                    fill="url(#benchmarkGradient)"
                    name="Market Benchmark"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-6">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className={`animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 glass-card rounded-xl p-6 delay-${
                  300 + index * 100
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{metric.label}</p>
                    <h4 className="text-2xl font-medium mt-1">{metric.value}</h4>
                  </div>
                  <div
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      metric.trend.startsWith("+")
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                    }`}
                  >
                    {metric.trend}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialInsights;
