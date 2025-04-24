import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Calculator", path: "/calculator" },
    { name: "About", path: "/about" }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-50 shadow-sm py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/6bc84c3b-71f6-4c55-9807-1566a1ae2ddd.png" 
            alt="TuringFin Logo" 
            className="h-10 w-10 object-contain"
          />
          <span className="text-black font-bold text-xl">TuringFin</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`${
                location.pathname === item.path
                  ? "text-primary font-medium"
                  : "text-gray-600 hover:text-primary"
              } transition-colors duration-200`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-50">
          <div className="flex flex-col p-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? "text-primary font-medium"
                    : "text-gray-600"
                } py-2 px-4 hover:bg-gray-50 rounded-md transition-colors duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
