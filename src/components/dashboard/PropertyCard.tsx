
import React from "react";

interface PropertyCardProps {
  id: number;
  title: string;
  location: string;
  value: string;
  roi: string;
  risk: string;
  image: string;
}

const PropertyCard = ({ title, location, value, roi, image }: PropertyCardProps) => {
  return (
    <div className="flex items-center border rounded-lg p-3 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
      <div className="w-16 h-16 rounded overflow-hidden mr-4 flex-shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow">
        <h3 className="font-medium">{title}</h3>
        <p className="text-xs text-zinc-500">{location}</p>
      </div>
      <div className="text-right">
        <p className="font-bold">{value}</p>
        <p className={`text-xs ${roi.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
          {roi} ROI
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
