
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Info } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex items-center gap-2 mb-8">
          <Info className="h-6 w-6" />
          <h1 className="text-3xl font-bold">About PropWise</h1>
        </div>
        <div className="max-w-3xl">
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
            PropWise is an AI-powered real estate investment platform that helps investors make smarter decisions through data-driven insights and advanced analytics.
          </p>
          <h2 className="text-xl font-bold mb-3">Our Mission</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            To democratize real estate investing by providing powerful AI tools and insights that were once only available to large institutional investors.
          </p>
          <h2 className="text-xl font-bold mb-3">Our Approach</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            We combine cutting-edge artificial intelligence with deep real estate expertise to offer unparalleled investment analysis and guidance. Our platform helps you optimize key factors such as resale value, rental yield, property durability, and maintenance costs.
          </p>
          <h2 className="text-xl font-bold mb-3">Our Team</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            PropWise was founded by a team of real estate professionals, data scientists, and AI experts with decades of combined experience in property investment and technology.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
