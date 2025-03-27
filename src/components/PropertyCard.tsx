
import React from "react";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  roi: string;
  risk: string;
  className?: string;
}

const PropertyCard = ({ 
  image, 
  title, 
  location, 
  price, 
  roi, 
  risk,
  className 
}: PropertyCardProps) => {
  return (
    <div className={cn("rounded-xl overflow-hidden glass-card hover-card-animation", className)}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <span className="px-2 py-1 text-xs font-medium bg-white/90 text-zinc-900 rounded-full">
            {risk === "low" 
              ? "Low Risk" 
              : risk === "medium" 
                ? "Medium Risk" 
                : "High Risk"
            }
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-medium text-lg">{title}</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">{location}</p>
          </div>
          <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg px-2 py-1 text-sm font-medium">
            {roi}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span className="block text-zinc-500 dark:text-zinc-400 text-xs">Current Value</span>
            <span className="text-lg font-medium">{price}</span>
          </div>
          <button className="text-sm font-medium text-zinc-900 dark:text-white py-1 px-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
