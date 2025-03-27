
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2 } from "lucide-react";

const Properties = () => {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex items-center gap-2 mb-8">
          <Building2 className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Properties</h1>
        </div>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          Browse our extensive collection of investment properties across various markets.
        </p>
        {/* Property listing would go here */}
        <div className="h-64 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center">
          [Property Listings Coming Soon]
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Properties;
