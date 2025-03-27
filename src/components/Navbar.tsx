
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  LogIn, 
  UserPlus, 
  User,
  LogOut,
  Menu,
  X
} from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Mock auth state - In a real app, this would come from your auth context
  const isAuthenticated = location.pathname === "/dashboard" || location.pathname === "/profile";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    // In a real app, this would call your logout function
    navigate("/");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-10",
        isScrolled
          ? "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-medium text-zinc-900 dark:text-white flex items-center space-x-2"
        >
          <span className="w-8 h-8 rounded-full bg-zinc-900 dark:bg-white flex items-center justify-center">
            <span className="text-white dark:text-zinc-900 text-xs font-bold">RE</span>
          </span>
          <span className="hidden sm:inline-block">PropWise</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {["Features", "Solutions", "Pricing", "About"].map((item) => (
            <Link
              key={item}
              to={`#${item.toLowerCase()}`}
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2" 
                  onClick={() => navigate("/dashboard")}
                >
                  <User className="h-4 w-4" />
                  Dashboard
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2 text-red-500" 
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4" />
                  Log Out
                </Button>
              </div>
            ) : (
              <>
                <Button 
                  variant="outline" 
                  className="mr-2 flex items-center gap-2" 
                  onClick={() => navigate("/sign-in")}
                >
                  <LogIn className="h-4 w-4" />
                  Log In
                </Button>
                <Button 
                  className="bg-zinc-900 text-white hover:bg-zinc-800 flex items-center gap-2"
                  onClick={() => navigate("/sign-up")}
                >
                  <UserPlus className="h-4 w-4" />
                  Sign Up
                </Button>
              </>
            )}
          </div>

          <button
            className="md:hidden text-zinc-900 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {!isMobileMenuOpen ? (
              <Menu className="h-6 w-6" />
            ) : (
              <X className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 bg-white dark:bg-zinc-900 shadow-lg transition-all duration-300 ease-in-out",
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 h-auto"
            : "opacity-0 -translate-y-full h-0"
        )}
      >
        <div className="px-6 py-6 space-y-4">
          {["Features", "Solutions", "Pricing", "About"].map((item) => (
            <Link
              key={item}
              to={`#${item.toLowerCase()}`}
              className="block py-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <div className="pt-4 flex flex-col space-y-2">
            {isAuthenticated ? (
              <>
                <Button 
                  variant="outline" 
                  className="w-full justify-center flex items-center gap-2"
                  onClick={() => {
                    navigate("/dashboard");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <User className="h-4 w-4" />
                  Dashboard
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-center flex items-center gap-2 text-red-500"
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <LogOut className="h-4 w-4" />
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="outline" 
                  className="w-full justify-center flex items-center gap-2"
                  onClick={() => {
                    navigate("/sign-in");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <LogIn className="h-4 w-4" />
                  Log In
                </Button>
                <Button 
                  className="w-full justify-center bg-zinc-900 text-white hover:bg-zinc-800 flex items-center gap-2"
                  onClick={() => {
                    navigate("/sign-up");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <UserPlus className="h-4 w-4" />
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
