
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardTabs from "@/components/dashboard/DashboardTabs";
import { UserRole } from "@/types/dashboard";
import { propertyCards, notifications, analyticsData } from "@/data/dashboardData";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const userRole: UserRole = "investor";
  
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <DashboardHeader />
        <DashboardTabs 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          userRole={userRole}
          analyticsData={analyticsData}
          propertyCards={propertyCards}
          notifications={notifications}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
