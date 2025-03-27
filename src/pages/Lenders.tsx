
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DollarSign } from "lucide-react";

const Lenders = () => {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex items-center gap-2 mb-8">
          <DollarSign className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Financing Options</h1>
        </div>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          Connect with trusted financial partners to secure optimal financing for your real estate investments.
        </p>
        {/* Lenders content would go here */}
        <div className="h-64 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center">
          [Financing Partners Coming Soon]
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Lenders;
