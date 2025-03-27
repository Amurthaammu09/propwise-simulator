
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const PropertyAnalysis = () => {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex items-center gap-2 mb-8">
          <BarChart3 className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Property Analysis</h1>
        </div>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          In-depth analysis tools to evaluate properties, calculate ROI, and optimize investment decisions.
        </p>
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800 mb-8">
          <h2 className="text-xl font-bold mb-4">Investment Calculator</h2>
          <p className="mb-6">Calculate potential returns on investment properties with our comprehensive analytical tools.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Purchase Analysis</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Compare purchase options and financing scenarios</p>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Rental Analysis</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Project cash flow and rental income potential</p>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Resale Projection</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Estimate future value and exit strategies</p>
            </div>
          </div>
          <Button>Start New Analysis</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PropertyAnalysis;
