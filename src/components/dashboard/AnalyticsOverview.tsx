
import React from "react";
import { Activity, BarChart3, DollarSign, TrendingUp } from "lucide-react";
import AnalyticsCard from "./AnalyticsCard";
import { AnalyticsData } from "@/types/dashboard";

interface AnalyticsOverviewProps {
  data: AnalyticsData;
}

const AnalyticsOverview = ({ data }: AnalyticsOverviewProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <AnalyticsCard
        title="Portfolio Value"
        value={`$${(data.propertyValue / 1000000).toFixed(1)}M`}
        changeValue={data.propertyValueChange}
        icon={DollarSign}
      />
      <AnalyticsCard
        title="Rental Yield"
        value={`${data.rentalYield}%`}
        changeValue={data.rentalYieldChange}
        icon={TrendingUp}
      />
      <AnalyticsCard
        title="ROI"
        value={`${data.portfolioROI}%`}
        changeValue={data.portfolioROIChange}
        icon={Activity}
      />
      <AnalyticsCard
        title="Risk Score"
        value={`${data.riskScore}/100`}
        changeValue={data.riskScoreChange}
        changeText="from last assessment"
        icon={BarChart3}
        isRiskCard={true}
        riskScore={data.riskScore}
      />
    </div>
  );
};

export default AnalyticsOverview;
