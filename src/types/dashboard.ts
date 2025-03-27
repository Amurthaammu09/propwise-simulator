
export type UserRole = "investor" | "developer" | "admin";

export interface Property {
  id: number;
  title: string;
  location: string;
  value: string;
  roi: string;
  risk: string;
  image: string;
}

export interface Notification {
  id: number;
  title: string;
  description: string;
  time: string;
}

export interface AnalyticsData {
  propertyValue: number;
  propertyValueChange: number;
  rentalYield: number;
  rentalYieldChange: number;
  portfolioROI: number;
  portfolioROIChange: number;
  riskScore: number;
  riskScoreChange: number;
}
