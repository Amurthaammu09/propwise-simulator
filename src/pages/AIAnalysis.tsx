
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const AIAnalysis = () => {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex items-center gap-2 mb-8">
          <Brain className="h-6 w-6" />
          <h1 className="text-3xl font-bold">AI Property Analysis</h1>
        </div>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          Leverage our advanced AI tools to analyze property investments, market trends, and ROI potential.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-xl font-bold mb-4">Property Valuation</h2>
            <p className="mb-4">Use AI to accurately value properties based on market data, comparables, and future trends.</p>
            <Button>Run Property Valuation</Button>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-xl font-bold mb-4">Investment Risk Analysis</h2>
            <p className="mb-4">Assess the risk profile of potential investments using predictive AI models.</p>
            <Button>Run Risk Analysis</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIAnalysis;
