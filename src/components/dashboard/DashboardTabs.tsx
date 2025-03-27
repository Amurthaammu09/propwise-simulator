
import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import AnalyticsOverview from "./AnalyticsOverview";
import PropertiesOverview from "./PropertiesOverview";
import NotificationsCard from "./NotificationsCard";
import PlaceholderTab from "./PlaceholderTab";
import { AnalyticsData, Property, Notification } from "@/types/dashboard";

interface DashboardTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userRole: "investor" | "developer" | "admin";
  analyticsData: AnalyticsData;
  propertyCards: Property[];
  notifications: Notification[];
}

const DashboardTabs = ({
  activeTab,
  setActiveTab,
  userRole,
  analyticsData,
  propertyCards,
  notifications,
}: DashboardTabsProps) => {
  return (
    <Tabs defaultValue="overview" className="mb-8">
      <TabsList className="grid grid-cols-3 md:grid-cols-6 lg:w-[800px]">
        <TabsTrigger value="overview" onClick={() => setActiveTab("overview")}>Overview</TabsTrigger>
        <TabsTrigger value="properties" onClick={() => setActiveTab("properties")}>Properties</TabsTrigger>
        <TabsTrigger value="analytics" onClick={() => setActiveTab("analytics")}>Analytics</TabsTrigger>
        {userRole === "developer" && (
          <TabsTrigger value="projects" onClick={() => setActiveTab("projects")}>Projects</TabsTrigger>
        )}
        {userRole === "admin" && (
          <TabsTrigger value="users" onClick={() => setActiveTab("users")}>Users</TabsTrigger>
        )}
        <TabsTrigger value="settings" onClick={() => setActiveTab("settings")}>Settings</TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview" className="mt-6">
        <AnalyticsOverview data={analyticsData} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <PropertiesOverview properties={propertyCards} />
          <NotificationsCard notifications={notifications} />
        </div>
      </TabsContent>

      {activeTab === "properties" && (
        <div className="mt-6">
          <PlaceholderTab title="Property Management Interface" />
        </div>
      )}
      
      {activeTab === "analytics" && (
        <div className="mt-6">
          <PlaceholderTab title="Advanced Analytics" />
        </div>
      )}
      
      {userRole === "developer" && activeTab === "projects" && (
        <div className="mt-6">
          <PlaceholderTab title="Project Management Interface" />
        </div>
      )}
      
      {userRole === "admin" && activeTab === "users" && (
        <div className="mt-6">
          <PlaceholderTab title="User Management Interface" />
        </div>
      )}
      
      {activeTab === "settings" && (
        <div className="mt-6">
          <PlaceholderTab title="Settings Interface" />
        </div>
      )}
    </Tabs>
  );
};

export default DashboardTabs;
