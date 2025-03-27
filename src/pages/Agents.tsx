
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Star, MapPin, Phone, Mail, Calendar, CheckCircle, UserCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock data for agents
const agents = [
  {
    id: 1,
    name: "Sarah Johnson",
    photo: "https://placehold.co/150x150/png",
    role: "Senior Investment Advisor",
    specialties: ["Commercial", "Multi-family", "Retirement Properties"],
    location: "New York, NY",
    phone: "(212) 555-1234",
    email: "sarah.johnson@propwise.com",
    experience: "12 years",
    rating: 4.9,
    reviewCount: 156,
    verified: true,
    clients: 89,
    deals: "$120M+",
    bio: "Sarah specializes in high-value commercial properties and has helped investors across NYC maximize their returns through strategic acquisitions and portfolio optimization."
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    photo: "https://placehold.co/150x150/png",
    role: "Development Specialist",
    specialties: ["Land Development", "Zoning", "New Construction"],
    location: "Austin, TX",
    phone: "(512) 555-6789",
    email: "michael.rodriguez@propwise.com",
    experience: "8 years",
    rating: 4.7,
    reviewCount: 98,
    verified: true,
    clients: 64,
    deals: "$85M+",
    bio: "Michael has deep expertise in land development and zoning regulations, helping investors identify high-potential properties before they hit the mainstream market."
  },
  {
    id: 3,
    name: "Jennifer Liu",
    photo: "https://placehold.co/150x150/png",
    role: "Residential Investment Expert",
    specialties: ["Single Family", "Condos", "Rental Properties"],
    location: "San Francisco, CA",
    phone: "(415) 555-4321",
    email: "jennifer.liu@propwise.com",
    experience: "15 years",
    rating: 4.8,
    reviewCount: 210,
    verified: true,
    clients: 132,
    deals: "$175M+",
    bio: "Jennifer has guided hundreds of investors through San Francisco's competitive real estate market, with particular expertise in residential income properties and rental optimization."
  },
  {
    id: 4,
    name: "Robert Washington",
    photo: "https://placehold.co/150x150/png",
    role: "Commercial Property Analyst",
    specialties: ["Office Spaces", "Retail", "Industrial"],
    location: "Chicago, IL",
    phone: "(312) 555-8765",
    email: "robert.washington@propwise.com",
    experience: "10 years",
    rating: 4.6,
    reviewCount: 87,
    verified: true,
    clients: 75,
    deals: "$110M+",
    bio: "Robert combines his background in finance with real estate expertise to help investors find undervalued commercial properties with strong long-term growth potential."
  }
];

const Agents = () => {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex items-center gap-2 mb-4">
          <Users className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Real Estate Agents</h1>
        </div>
        
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          Connect with our experienced real estate professionals to guide your investment journey.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-4">Why work with a PropWise agent?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">AI-Enhanced Insights</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Our agents leverage PropWise AI to identify optimal investment opportunities tailored to your goals.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Investment Specialists</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Focused on ROI and long-term value, not just property transactions.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Full-Service Support</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">From market analysis to closing, our agents provide end-to-end investment guidance.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {agents.map((agent) => (
            <Card key={agent.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3 bg-zinc-100 dark:bg-zinc-800 p-6 flex flex-col items-center justify-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                      <img src={agent.photo} alt={agent.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-semibold text-center">{agent.name}</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center mb-2">{agent.role}</p>
                    <div className="flex items-center text-amber-500 mb-2">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="ml-1 text-sm">{agent.rating}</span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400 ml-1">({agent.reviewCount} reviews)</span>
                    </div>
                    {agent.verified && (
                      <Badge variant="outline" className="flex items-center">
                        <UserCheck className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  
                  <div className="sm:w-2/3 p-6">
                    <p className="text-sm mb-4">{agent.bio}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Specialties</h4>
                      <div className="flex flex-wrap gap-2">
                        {agent.specialties.map((specialty, index) => (
                          <Badge key={index} variant="secondary">{specialty}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-xs text-zinc-500 dark:text-zinc-400">Experience</h4>
                        <p className="text-sm font-medium">{agent.experience}</p>
                      </div>
                      <div>
                        <h4 className="text-xs text-zinc-500 dark:text-zinc-400">Clients Served</h4>
                        <p className="text-sm font-medium">{agent.clients}+ clients</p>
                      </div>
                      <div>
                        <h4 className="text-xs text-zinc-500 dark:text-zinc-400">Transaction Volume</h4>
                        <p className="text-sm font-medium">{agent.deals}</p>
                      </div>
                      <div>
                        <h4 className="text-xs text-zinc-500 dark:text-zinc-400">Location</h4>
                        <p className="text-sm font-medium flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {agent.location}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2 mt-4">
                      <a href={`mailto:${agent.email}`} className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center">
                        <Mail className="h-4 w-4 mr-2" />
                        Contact Agent
                      </a>
                      <a href="#" className="border border-zinc-200 dark:border-zinc-700 px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        Schedule Meeting
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Need help finding the right agent?</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl mx-auto">
            Let us match you with an investment specialist who understands your unique goals and strategy.
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
            Find My Agent Match
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Agents;
