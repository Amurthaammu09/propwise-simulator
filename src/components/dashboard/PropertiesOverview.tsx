
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import PropertyCard from "./PropertyCard";
import { Property } from "@/types/dashboard";

interface PropertiesOverviewProps {
  properties: Property[];
}

const PropertiesOverview = ({ properties }: PropertiesOverviewProps) => {
  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle>Recent Properties</CardTitle>
        <CardDescription>Your latest investment properties</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <button className="text-sm text-primary hover:underline">View all properties</button>
      </CardFooter>
    </Card>
  );
};

export default PropertiesOverview;
