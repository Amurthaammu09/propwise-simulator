
import React from "react";

interface PlaceholderTabProps {
  title: string;
}

const PlaceholderTab = ({ title }: PlaceholderTabProps) => {
  return (
    <div className="h-64 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center">
      [{title} Coming Soon]
    </div>
  );
};

export default PlaceholderTab;
