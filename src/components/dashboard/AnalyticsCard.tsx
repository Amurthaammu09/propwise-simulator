
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LucideIcon } from "lucide-react";

interface AnalyticsCardProps {
  title: string;
  value: string | number;
  changeValue: number;
  changeText?: string;
  icon: LucideIcon;
  isRiskCard?: boolean;
  riskScore?: number;
}

const AnalyticsCard = ({
  title,
  value,
  changeValue,
  changeText = "from last month",
  icon: Icon,
  isRiskCard = false,
  riskScore,
}: AnalyticsCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-zinc-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {isRiskCard && riskScore !== undefined ? (
          <>
            <Progress value={riskScore} className="h-2" />
            <p className="text-xs text-zinc-500 mt-2">
              <span className={changeValue < 0 ? "text-green-500" : "text-red-500"}>
                {changeValue < 0 ? "" : "+"}{changeValue} pts
              </span>{" "}
              {changeText}
            </p>
          </>
        ) : (
          <p className="text-xs text-zinc-500">
            <span className={changeValue > 0 ? "text-green-500" : "text-red-500"}>
              {changeValue > 0 ? "+" : ""}{changeValue}%
            </span>{" "}
            {changeText}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default AnalyticsCard;
