import React, { useState } from "react";
import { Search, Home, DollarSign, Filter } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface SearchBarProps {
  onSearch?: (searchParams: {
    location: string;
    priceRange: string;
    propertyType: string;
  }) => void;
  className?: string;
}

const SearchBar = ({ onSearch = () => {}, className = "" }: SearchBarProps) => {
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const handleSearch = () => {
    onSearch({ location, priceRange, propertyType });
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-4 md:p-6 w-full max-w-4xl mx-auto ${className}`}
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Home size={18} />
          </div>
          <Input
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="pl-10 h-12 border-gray-200"
          />
        </div>

        <div className="flex-1 relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <DollarSign size={18} />
          </div>
          <Select value={priceRange} onValueChange={setPriceRange}>
            <SelectTrigger className="pl-10 h-12 border-gray-200">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-100000">$0 - $100,000</SelectItem>
              <SelectItem value="100000-300000">$100,000 - $300,000</SelectItem>
              <SelectItem value="300000-500000">$300,000 - $500,000</SelectItem>
              <SelectItem value="500000-1000000">
                $500,000 - $1,000,000
              </SelectItem>
              <SelectItem value="1000000+">$1,000,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1 relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Filter size={18} />
          </div>
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger className="pl-10 h-12 border-gray-200">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
              <SelectItem value="land">Land</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={handleSearch}
          className="h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
