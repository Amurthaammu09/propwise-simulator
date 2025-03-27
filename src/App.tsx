
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

// Create placeholder pages for new routes
import Properties from "./pages/Properties";
import Agents from "./pages/Agents";
import AIAnalysis from "./pages/AIAnalysis";
import Rentals from "./pages/Rentals";
import Lenders from "./pages/Lenders";
import PropertyAnalysis from "./pages/PropertyAnalysis";
import About from "./pages/About";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          
          {/* New routes */}
          <Route path="/properties" element={<Properties />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/ai-analysis" element={<AIAnalysis />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/lenders" element={<Lenders />} />
          <Route path="/property-analysis" element={<PropertyAnalysis />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
