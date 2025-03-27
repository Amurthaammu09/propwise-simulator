
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
  Building2,
  TrendingUp,
  DollarSign,
  FileText,
  Map,
  Settings,
  PieChart,
  BarChart3,
  Clock,
  Bell,
  User,
  AlertCircle
} from "lucide-react";
import Footer from "@/components/Footer";

type UserRole = "investor" | "developer" | "admin";

const Dashboard = () => {
  const navigate = useNavigate();
  
  // This would be fetched from your auth context in a real application
  const userRole: UserRole = "investor"; // Could be "investor", "developer", or "admin"
  
  // Mock data for demonstration purposes
  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=3053&auto=format&fit=crop",
      title: "Modern Apartment Complex",
      location: "Downtown, New York",
      price: "$2,450,000",
      roi: "8.5% ROI",
      risk: "low"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=3024&auto=format&fit=crop",
      title: "Suburban Family Home",
      location: "Westfield, New Jersey",
      price: "$850,000",
      roi: "6.2% ROI",
      risk: "medium"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=3087&auto=format&fit=crop",
      title: "Commercial Office Building",
      location: "Financial District, San Francisco",
      price: "$5,200,000",
      roi: "9.8% ROI",
      risk: "high"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">Welcome to your Dashboard</h1>
            <p className="text-zinc-500 dark:text-zinc-400">
              Manage your investments and access AI-powered insights
            </p>
          </div>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center"
              onClick={() => navigate("/profile")}
            >
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center"
            >
              <Bell className="mr-2 h-4 w-4" />
              Notifications
            </Button>
            <Button size="sm" className="flex items-center">
              <TrendingUp className="mr-2 h-4 w-4" />
              New Analysis
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Portfolio Value
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$8,500,000</div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                <span className="text-green-500 font-medium">↑ 12.5%</span> from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Current ROI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7.8%</div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                <span className="text-green-500 font-medium">↑ 0.6%</span> from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Risk Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Low-Medium</div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Based on current market conditions
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="properties" className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="properties" className="flex items-center">
              <Building2 className="mr-2 h-4 w-4" />
              Properties
            </TabsTrigger>
            <TabsTrigger value="insights" className="flex items-center">
              <PieChart className="mr-2 h-4 w-4" />
              Insights
            </TabsTrigger>
            <TabsTrigger value="market" className="flex items-center">
              <BarChart3 className="mr-2 h-4 w-4" />
              Market Analysis
            </TabsTrigger>
            {userRole === "developer" && (
              <TabsTrigger value="zoning" className="flex items-center">
                <Map className="mr-2 h-4 w-4" />
                Zoning
              </TabsTrigger>
            )}
            {userRole === "admin" && (
              <TabsTrigger value="admin" className="flex items-center">
                <Settings className="mr-2 h-4 w-4" />
                Admin Panel
              </TabsTrigger>
            )}
          </TabsList>
          
          <TabsContent value="properties">
            <h2 className="text-xl font-bold mb-4">Your Investment Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard
                  key={property.id}
                  image={property.image}
                  title={property.title}
                  location={property.location}
                  price={property.price}
                  roi={property.roi}
                  risk={property.risk}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="insights">
            <h2 className="text-xl font-bold mb-4">AI Investment Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Market Trends</CardTitle>
                  <CardDescription>
                    AI-powered analysis of current market conditions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">
                    <span className="font-medium">Rising demand:</span> 3-bedroom apartments in urban centers
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Decreasing value:</span> Commercial office spaces due to remote work
                  </p>
                  <p>
                    <span className="font-medium">Opportunity area:</span> Mixed-use developments in suburban locations
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Investment Recommendations</CardTitle>
                  <CardDescription>
                    Personalized suggestions based on your portfolio
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">
                    <span className="font-medium">Diversify:</span> Consider adding residential properties to balance commercial investments
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Optimize:</span> Renovate Property #2 to increase rental yield by estimated 12%
                  </p>
                  <p>
                    <span className="font-medium">Expand:</span> Miami market shows strong growth potential matching your risk profile
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="market">
            <h2 className="text-xl font-bold mb-4">Market Analysis</h2>
            <p className="text-zinc-500 dark:text-zinc-400 mb-6">
              Comprehensive analysis of real estate markets based on location, property type, and investment goals.
            </p>
            <div className="h-64 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center mb-4">
              [Market Trend Chart Placeholder]
            </div>
            <Button>Generate New Analysis</Button>
          </TabsContent>
          
          {userRole === "developer" && (
            <TabsContent value="zoning">
              <h2 className="text-xl font-bold mb-4">Zoning Optimizer</h2>
              <p className="text-zinc-500 dark:text-zinc-400 mb-6">
                Tools for developers to analyze zoning regulations and optimize property usage.
              </p>
              <Button>Run Zoning Analysis</Button>
            </TabsContent>
          )}
          
          {userRole === "admin" && (
            <TabsContent value="admin">
              <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
              <p className="text-zinc-500 dark:text-zinc-400 mb-6">
                Manage platform settings, user permissions, and data access.
              </p>
              <Button>Access Admin Controls</Button>
            </TabsContent>
          )}
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                Recent Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary rounded-full p-2">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">New property analysis completed</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">2 hours ago</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary rounded-full p-2">
                    <DollarSign className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">ROI calculation updated</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Yesterday</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary rounded-full p-2">
                    <Map className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">New zoning data available</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">3 days ago</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="mr-2 h-5 w-5" />
                Alerts & Notifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="bg-yellow-500/10 text-yellow-500 rounded-full p-2">
                    <AlertCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Market volatility detected in commercial sector</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">High priority</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-green-500/10 text-green-500 rounded-full p-2">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Positive trend in residential property values</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Medium priority</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-blue-500/10 text-blue-500 rounded-full p-2">
                    <Building2 className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">New investment opportunity matching your criteria</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Medium priority</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
