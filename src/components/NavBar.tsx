
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border py-4">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-primary">
            SparklyFlow
          </a>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </a>
            <a href="#platform" className="text-sm font-medium hover:text-primary transition-colors">
              Platform
            </a>
            <a href="#case-studies" className="text-sm font-medium hover:text-primary transition-colors">
              Case Studies
            </a>
            <a href="#solutions" className="text-sm font-medium hover:text-primary transition-colors">
              Solutions
            </a>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" size="sm">
              Log In
            </Button>
            <Button size="sm">
              Request Demo
            </Button>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-background z-40 p-4 md:hidden animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="p-2 text-lg hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#platform" 
              className="p-2 text-lg hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Platform
            </a>
            <a 
              href="#case-studies" 
              className="p-2 text-lg hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </a>
            <a 
              href="#solutions" 
              className="p-2 text-lg hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </a>
            <div className="pt-4 flex flex-col space-y-3">
              <Button variant="outline">Log In</Button>
              <Button>Request Demo</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
