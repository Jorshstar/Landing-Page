import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";

interface ListingFiltersProps {
  onFilterChange?: (filters: any) => void;
  className?: string;
}

const ListingFilters = ({
  onFilterChange = () => {},
  className = "",
}: ListingFiltersProps) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${className}`}>
      <h3 className="text-lg font-semibold mb-4">Filter Properties</h3>

      {/* Location */}
      <div className="mb-4">
        <Label htmlFor="location" className="block mb-2">
          Location
        </Label>
        <Input
          id="location"
          placeholder="City, neighborhood, or ZIP"
          className="w-full"
          onChange={() => onFilterChange({})}
        />
      </div>

      {/* Price Range */}
      <div className="mb-4">
        <Label className="block mb-2">Price Range</Label>
        <div className="space-y-4">
          <Slider
            defaultValue={[0, 2000000]}
            max={5000000}
            step={50000}
            onValueChange={() => onFilterChange({})}
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>$0</span>
            <span>$5M+</span>
          </div>
        </div>
      </div>

      {/* Property Type */}
      <div className="mb-4">
        <Label htmlFor="propertyType" className="block mb-2">
          Property Type
        </Label>
        <Select onValueChange={() => onFilterChange({})}>
          <SelectTrigger id="propertyType">
            <SelectValue placeholder="All Property Types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Property Types</SelectItem>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="condo">Condo</SelectItem>
            <SelectItem value="townhouse">Townhouse</SelectItem>
            <SelectItem value="land">Land</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Bedrooms */}
      <div className="mb-4">
        <Label htmlFor="bedrooms" className="block mb-2">
          Bedrooms
        </Label>
        <Select onValueChange={() => onFilterChange({})}>
          <SelectTrigger id="bedrooms">
            <SelectValue placeholder="Any" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any</SelectItem>
            <SelectItem value="1">1+</SelectItem>
            <SelectItem value="2">2+</SelectItem>
            <SelectItem value="3">3+</SelectItem>
            <SelectItem value="4">4+</SelectItem>
            <SelectItem value="5">5+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Bathrooms */}
      <div className="mb-4">
        <Label htmlFor="bathrooms" className="block mb-2">
          Bathrooms
        </Label>
        <Select onValueChange={() => onFilterChange({})}>
          <SelectTrigger id="bathrooms">
            <SelectValue placeholder="Any" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any</SelectItem>
            <SelectItem value="1">1+</SelectItem>
            <SelectItem value="2">2+</SelectItem>
            <SelectItem value="3">3+</SelectItem>
            <SelectItem value="4">4+</SelectItem>
            <SelectItem value="5">5+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Additional Features */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Features</h4>
        <div className="space-y-2">
          <div className="flex items-center">
            <Checkbox id="pool" onCheckedChange={() => onFilterChange({})} />
            <label htmlFor="pool" className="ml-2 text-sm">
              Pool
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="garage" onCheckedChange={() => onFilterChange({})} />
            <label htmlFor="garage" className="ml-2 text-sm">
              Garage
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox
              id="airConditioning"
              onCheckedChange={() => onFilterChange({})}
            />
            <label htmlFor="airConditioning" className="ml-2 text-sm">
              Air Conditioning
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox
              id="furnished"
              onCheckedChange={() => onFilterChange({})}
            />
            <label htmlFor="furnished" className="ml-2 text-sm">
              Furnished
            </label>
          </div>
        </div>
      </div>

      {/* Apply Filters Button */}
      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
        Apply Filters
      </Button>
    </div>
  );
};

export default ListingFilters;
