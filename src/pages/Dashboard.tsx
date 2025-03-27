import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { 
  Activity, 
  Building, 
  DollarSign, 
  Map, 
  Settings, 
  TrendingUp, 
  Users, 
  BarChart3,
  Briefcase,
  FileText,
  HardHat,
  Bell
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import Footer from "@/components/Footer";

type UserRole = "investor" | "developer" | "admin";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const userRole: UserRole = "investor";
  
  const propertyCards = [
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

  const notifications = [
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

  const analyticsData = {
    propertyValue: 12500000,
    propertyValueChange: 8.4,
    rentalYield: 6.8,
    rentalYieldChange: 0.5,
    portfolioROI: 11.3,
    portfolioROIChange: 2.1,
    riskScore: 42,
    riskScoreChange: -5,
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              Welcome back! Here's an overview of your real estate investments.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Properties</SelectItem>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="industrial">Industrial</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="month">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Time period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Portfolio Value</CardTitle>
                  <DollarSign className="h-4 w-4 text-zinc-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${(analyticsData.propertyValue / 1000000).toFixed(1)}M</div>
                  <p className="text-xs text-zinc-500">
                    <span className={analyticsData.propertyValueChange > 0 ? "text-green-500" : "text-red-500"}>
                      {analyticsData.propertyValueChange > 0 ? "+" : ""}{analyticsData.propertyValueChange}%
                    </span>{" "}
                    from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Rental Yield</CardTitle>
                  <TrendingUp className="h-4 w-4 text-zinc-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analyticsData.rentalYield}%</div>
                  <p className="text-xs text-zinc-500">
                    <span className={analyticsData.rentalYieldChange > 0 ? "text-green-500" : "text-red-500"}>
                      {analyticsData.rentalYieldChange > 0 ? "+" : ""}{analyticsData.rentalYieldChange}%
                    </span>{" "}
                    from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">ROI</CardTitle>
                  <Activity className="h-4 w-4 text-zinc-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analyticsData.portfolioROI}%</div>
                  <p className="text-xs text-zinc-500">
                    <span className={analyticsData.portfolioROIChange > 0 ? "text-green-500" : "text-red-500"}>
                      {analyticsData.portfolioROIChange > 0 ? "+" : ""}{analyticsData.portfolioROIChange}%
                    </span>{" "}
                    from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Risk Score</CardTitle>
                  <BarChart3 className="h-4 w-4 text-zinc-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analyticsData.riskScore}/100</div>
                  <Progress value={analyticsData.riskScore} className="h-2" />
                  <p className="text-xs text-zinc-500 mt-2">
                    <span className={analyticsData.riskScoreChange < 0 ? "text-green-500" : "text-red-500"}>
                      {analyticsData.riskScoreChange < 0 ? "" : "+"}{analyticsData.riskScoreChange} pts
                    </span>{" "}
                    from last assessment
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Recent Properties</CardTitle>
                  <CardDescription>Your latest investment properties</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {propertyCards.map((property) => (
                      <div key={property.id} className="flex items-center border rounded-lg p-3 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                        <div className="w-16 h-16 rounded overflow-hidden mr-4 flex-shrink-0">
                          <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-medium">{property.title}</h3>
                          <p className="text-xs text-zinc-500">{property.location}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">{property.value}</p>
                          <p className={`text-xs ${property.roi.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                            {property.roi} ROI
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <button className="text-sm text-primary hover:underline">View all properties</button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Recent Notifications</CardTitle>
                  <CardDescription>Latest updates from your investments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="border-b pb-3 last:border-0">
                        <div className="flex items-start">
                          <div className="bg-zinc-100 dark:bg-zinc-800 rounded-full p-2 mr-3">
                            <Bell className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">{notification.title}</h4>
                            <p className="text-xs text-zinc-500">{notification.description}</p>
                            <p className="text-xs text-zinc-400 mt-1">{notification.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <button className="text-sm text-primary hover:underline">View all notifications</button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          {activeTab === "properties" && (
            <div className="mt-6">
              <div className="h-64 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center">
                [Property Management Interface Coming Soon]
              </div>
            </div>
          )}
          
          {activeTab === "analytics" && (
            <div className="mt-6">
              <div className="h-64 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center">
                [Advanced Analytics Coming Soon]
              </div>
            </div>
          )}
          
          {userRole === "developer" && activeTab === "projects" && (
            <div className="mt-6">
              <div className="h-64 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center">
                [Project Management Interface Coming Soon]
              </div>
            </div>
          )}
          
          {userRole === "admin" && activeTab === "users" && (
            <div className="mt-6">
              <div className="h-64 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center">
                [User Management Interface Coming Soon]
              </div>
            </div>
          )}
          
          {activeTab === "settings" && (
            <div className="mt-6">
              <div className="h-64 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center">
                [Settings Interface Coming Soon]
              </div>
            </div>
          )}
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
