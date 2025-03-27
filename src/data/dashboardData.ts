
import { Property, Notification, AnalyticsData } from "@/types/dashboard";

export const propertyCards: Property[] = [
  {
    id: 1,
    title: "Downtown Loft Project",
    location: "123 Main St, New York, NY",
    value: "$2.4M",
    roi: "+12.5%",
    risk: "Low",
    image: "https://placehold.co/600x400/png",
  },
  {
    id: 2,
    title: "Riverside Apartments",
    location: "456 Water Ave, San Francisco, CA",
    value: "$5.8M",
    roi: "+8.3%",
    risk: "Medium",
    image: "https://placehold.co/600x400/png",
  },
  {
    id: 3,
    title: "Highland Commercial Center",
    location: "789 Hill Rd, Austin, TX",
    value: "$3.2M",
    roi: "+15.7%",
    risk: "High",
    image: "https://placehold.co/600x400/png",
  },
];

export const notifications: Notification[] = [
  {
    id: 1,
    title: "Market Analysis Complete",
    description: "Downtown Loft Project market analysis report is ready for review.",
    time: "2 hours ago",
  },
  {
    id: 2,
    title: "Property Value Update",
    description: "Riverside Apartments value has increased by 3.2% this month.",
    time: "1 day ago",
  },
  {
    id: 3,
    title: "New Tax Incentive",
    description: "New tax incentives available for commercial properties in Austin.",
    time: "2 days ago",
  },
];

export const analyticsData: AnalyticsData = {
  propertyValue: 12500000,
  propertyValueChange: 8.4,
  rentalYield: 6.8,
  rentalYieldChange: 0.5,
  portfolioROI: 11.3,
  portfolioROIChange: 2.1,
  riskScore: 42,
  riskScoreChange: -5,
};
