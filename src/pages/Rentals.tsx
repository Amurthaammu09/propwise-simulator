
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Key, Home, ArrowUpRight, Bed, Bath, ArrowRight, ChevronRight, DollarSign, Map, BarChart } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for rental properties
const rentalProperties = [
  {
    id: 1,
    title: "Luxury Downtown Apartment",
    address: "123 Main Street, New York, NY",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,200 sq ft",
    rent: "$3,500/mo",
    capRate: "5.2%",
    roi: "8.7%",
    occupancyRate: "96%",
    photo: "https://placehold.co/600x400/png",
    featured: true,
    management: "Full-service",
    tags: ["High Yield", "Downtown", "Furnished"]
  },
  {
    id: 2,
    title: "Modern Suburban Townhouse",
    address: "456 Oak Lane, Austin, TX",
    type: "Townhouse",
    bedrooms: 3,
    bathrooms: 2.5,
    area: "1,800 sq ft",
    rent: "$2,800/mo",
    capRate: "6.1%",
    roi: "9.4%",
    occupancyRate: "98%",
    photo: "https://placehold.co/600x400/png",
    featured: false,
    management: "Self-managed",
    tags: ["Family-friendly", "Growing Market"]
  },
  {
    id: 3,
    title: "Waterfront Condominium",
    address: "789 Harbor View, Miami, FL",
    type: "Condo",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,100 sq ft",
    rent: "$2,950/mo",
    capRate: "5.8%",
    roi: "10.1%",
    occupancyRate: "94%",
    photo: "https://placehold.co/600x400/png",
    featured: false,
    management: "Full-service",
    tags: ["Waterfront", "Vacation Potential"]
  },
  {
    id: 4,
    title: "Tech Hub Studio Apartments",
    address: "101 Innovation Way, San Francisco, CA",
    type: "Multi-unit",
    bedrooms: "Studio-2",
    bathrooms: "1-2",
    area: "500-1000 sq ft",
    rent: "$2,500-$4,200/mo",
    capRate: "4.7%",
    roi: "7.9%",
    occupancyRate: "99%",
    photo: "https://placehold.co/600x400/png",
    featured: true,
    management: "Full-service",
    tags: ["Tech Hub", "High Demand", "Appreciating"]
  },
  {
    id: 5,
    title: "Historic District Brownstone",
    address: "555 Heritage Row, Boston, MA",
    type: "Multi-family",
    bedrooms: "Multiple Units",
    bathrooms: "Multiple",
    area: "4,200 sq ft total",
    rent: "$12,500/mo total",
    capRate: "5.9%",
    roi: "9.8%",
    occupancyRate: "97%",
    photo: "https://placehold.co/600x400/png",
    featured: false,
    management: "Property Manager",
    tags: ["Historic", "Renovated", "Multi-unit"]
  },
  {
    id: 6,
    title: "University District Apartments",
    address: "222 College Blvd, Chapel Hill, NC",
    type: "Multi-unit",
    bedrooms: "1-3",
    bathrooms: "1-2",
    area: "700-1,400 sq ft",
    rent: "$1,200-$2,400/mo",
    capRate: "6.5%",
    roi: "11.2%",
    occupancyRate: "100%",
    photo: "https://placehold.co/600x400/png",
    featured: true,
    management: "Full-service",
    tags: ["Student Housing", "Stable Income"]
  }
];

// Mock data for management services
const managementServices = [
  {
    title: "Basic Management",
    price: "8% of monthly rent",
    features: [
      "Tenant screening & placement",
      "Rent collection",
      "Maintenance coordination",
      "Monthly financial reporting",
      "24/7 tenant support"
    ]
  },
  {
    title: "Premium Management",
    price: "10% of monthly rent",
    features: [
      "All Basic Management features",
      "Property marketing & advertising",
      "Lease renewal negotiation",
      "Quarterly property inspections",
      "Advanced financial analytics",
      "Tax documentation preparation"
    ]
  },
  {
    title: "Concierge Management",
    price: "12% of monthly rent",
    features: [
      "All Premium Management features",
      "Dedicated property manager",
      "Renovation management",
      "Property value optimization",
      "Investment portfolio advisory",
      "Market trend analysis",
      "Annual property tax assessment review"
    ]
  }
];

const Rentals = () => {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex items-center gap-2 mb-4">
          <Key className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Rental Properties</h1>
        </div>
        
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          Explore rental income opportunities and property management services for investors.
        </p>
        
        <Tabs defaultValue="properties" className="mb-10">
          <TabsList className="w-full max-w-md mx-auto">
            <TabsTrigger value="properties" className="flex-1">Rental Properties</TabsTrigger>
            <TabsTrigger value="management" className="flex-1">Management Services</TabsTrigger>
            <TabsTrigger value="analytics" className="flex-1">Market Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="properties" className="mt-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Featured Investment Properties</h2>
              <div className="flex items-center">
                <span className="text-sm text-zinc-500 dark:text-zinc-400 mr-2">View:</span>
                <button className="px-3 py-1 text-sm border rounded-l-md bg-primary text-white">All</button>
                <button className="px-3 py-1 text-sm border-y border-r rounded-r-md">Featured</button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {rentalProperties.map((property) => (
                <Card key={property.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative">
                    <img src={property.photo} alt={property.title} className="w-full h-48 object-cover" />
                    {property.featured && (
                      <Badge className="absolute top-2 right-2 bg-primary text-white">Featured</Badge>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{property.title}</h3>
                      <Badge variant="outline">{property.type}</Badge>
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 flex items-center mb-4">
                      <Map className="h-3 w-3 mr-1" />
                      {property.address}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="text-center p-2 bg-zinc-100 dark:bg-zinc-800 rounded">
                        <div className="flex items-center justify-center mb-1">
                          <Bed className="h-3 w-3 mr-1" />
                          <span className="text-xs">Beds</span>
                        </div>
                        <p className="text-sm font-medium">{property.bedrooms}</p>
                      </div>
                      <div className="text-center p-2 bg-zinc-100 dark:bg-zinc-800 rounded">
                        <div className="flex items-center justify-center mb-1">
                          <Bath className="h-3 w-3 mr-1" />
                          <span className="text-xs">Baths</span>
                        </div>
                        <p className="text-sm font-medium">{property.bathrooms}</p>
                      </div>
                      <div className="text-center p-2 bg-zinc-100 dark:bg-zinc-800 rounded">
                        <div className="flex items-center justify-center mb-1">
                          <Home className="h-3 w-3 mr-1" />
                          <span className="text-xs">Area</span>
                        </div>
                        <p className="text-sm font-medium">{property.area}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">Monthly Rent</p>
                        <p className="text-sm font-semibold">{property.rent}</p>
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">Cap Rate</p>
                        <p className="text-sm font-semibold">{property.capRate}</p>
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">ROI</p>
                        <p className="text-sm font-semibold">{property.roi}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mt-2">
                      {property.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="px-4 py-3 bg-zinc-50 dark:bg-zinc-900 flex justify-between">
                    <div className="text-sm">
                      <span className="text-zinc-500 dark:text-zinc-400">Management: </span>
                      <span className="font-medium">{property.management}</span>
                    </div>
                    <button className="text-primary text-sm font-medium flex items-center">
                      View Details <ArrowRight className="h-3 w-3 ml-1" />
                    </button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <button className="px-6 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm font-medium flex items-center mx-auto hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                Load More Properties <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </TabsContent>
          
          <TabsContent value="management" className="mt-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-semibold mb-6 text-center">Property Management Services</h2>
              <p className="text-center text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
                Our professional property management services help investors maximize rental income while minimizing hassle. Choose from our flexible service tiers:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {managementServices.map((service, index) => (
                  <Card key={index} className={`overflow-hidden ${index === 1 ? 'border-primary ring-1 ring-primary' : ''}`}>
                    {index === 1 && (
                      <div className="bg-primary text-white text-center py-1 text-sm font-medium">Most Popular</div>
                    )}
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                      <p className="text-2xl font-semibold mb-4">{service.price}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 p-1 rounded-full mr-2 flex-shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <button className={`w-full py-2 rounded-md font-medium text-sm ${
                        index === 1 
                        ? 'bg-primary text-white hover:bg-primary/90' 
                        : 'border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                      } transition-colors`}>
                        {index === 1 ? 'Get Started' : 'Learn More'}
                      </button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-primary" />
                  PropWise Rental Guarantee
                </h3>
                <p className="text-sm mb-4">
                  With our Premium and Concierge plans, you'll receive our exclusive Rental Guarantee - if your property remains vacant for more than 30 days, we'll cover the rental income until a qualified tenant is placed.
                </p>
                <a href="#" className="text-primary text-sm font-medium flex items-center">
                  Learn more about our guarantees <ArrowUpRight className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="analytics" className="mt-6">
            <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm mb-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h2 className="text-xl font-semibold">Rental Market Analytics</h2>
                <div className="mt-2 md:mt-0">
                  <select className="text-sm border rounded-md px-3 py-1">
                    <option>Last 12 Months</option>
                    <option>Last 6 Months</option>
                    <option>Last 3 Months</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="h-64 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center">
                  <BarChart className="h-6 w-6 mr-2 text-zinc-400" />
                  <span>Rental Yield Analytics [Visualization Coming Soon]</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="text-sm font-medium mb-2">Average Rental Yield</h3>
                      <div className="flex items-baseline">
                        <span className="text-2xl font-bold">5.8%</span>
                        <span className="ml-2 text-xs text-green-500">+0.3% from last year</span>
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                        Across all property types in our selected markets
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="text-sm font-medium mb-2">Occupancy Rate</h3>
                      <div className="flex items-baseline">
                        <span className="text-2xl font-bold">97.2%</span>
                        <span className="ml-2 text-xs text-green-500">+1.5% from last year</span>
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                        Properties managed through PropWise services
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="text-sm font-medium mb-2">Price to Rent Ratio</h3>
                      <div className="flex items-baseline">
                        <span className="text-2xl font-bold">15.3</span>
                        <span className="ml-2 text-xs text-red-500">-0.8 from last year</span>
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                        Lower ratio indicates better rental investment climate
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            
            <div className="text-center bg-primary/5 rounded-lg p-8">
              <h2 className="text-xl font-semibold mb-4">Need personalized rental market insights?</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl mx-auto">
                Our AI-powered rental market analysis can provide custom insights for your specific investment criteria and target locations.
              </p>
              <button className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors">
                Generate Custom Rental Analysis
              </button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Rentals;
