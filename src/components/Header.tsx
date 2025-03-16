import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  transparent?: boolean;
}

const Header = ({ transparent = true }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !transparent ? "bg-white shadow-md" : "bg-transparent"}`;
  const textClass = isScrolled || !transparent ? "text-gray-800" : "text-white";

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className={`text-2xl font-bold ${textClass}`}>RealEstate</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`${textClass} hover:text-blue-600 font-medium ${isActive("/") ? "text-blue-600" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/listings"
            className={`${textClass} hover:text-blue-600 font-medium ${isActive("/listings") ? "text-blue-600" : ""}`}
          >
            Listings
          </Link>
          <Link
            to="/about"
            className={`${textClass} hover:text-blue-600 font-medium ${isActive("/about") ? "text-blue-600" : ""}`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`${textClass} hover:text-blue-600 font-medium ${isActive("/contact") ? "text-blue-600" : ""}`}
          >
            Contact
          </Link>
        </nav>

        {/* User Account Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="outline"
            className={`${textClass} border-2 hover:bg-blue-600 hover:text-white transition-colors`}
          >
            <User className="mr-2 h-4 w-4" />
            Account
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <X className={textClass} size={24} />
          ) : (
            <Menu className={textClass} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className={`text-gray-800 hover:text-blue-600 font-medium py-2 ${isActive("/") ? "text-blue-600" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/listings"
              className={`text-gray-800 hover:text-blue-600 font-medium py-2 ${isActive("/listings") ? "text-blue-600" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Listings
            </Link>
            <Link
              to="/about"
              className={`text-gray-800 hover:text-blue-600 font-medium py-2 ${isActive("/about") ? "text-blue-600" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-gray-800 hover:text-blue-600 font-medium py-2 ${isActive("/contact") ? "text-blue-600" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              variant="outline"
              className="text-gray-800 border-2 hover:bg-blue-600 hover:text-white transition-colors w-full justify-center"
            >
              <User className="mr-2 h-4 w-4" />
              Account
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
