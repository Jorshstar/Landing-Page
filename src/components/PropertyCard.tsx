import React from "react";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Heart, Bed, Bath, Maximize } from "lucide-react";

interface PropertyCardProps {
  image?: string;
  title?: string;
  price?: string;
  address?: string;
  bedrooms?: number;
  bathrooms?: number;
  squareFootage?: number;
  isFeatured?: boolean;
  onClick?: () => void;
}

const PropertyCard = ({
  image = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
  title = "Modern Luxury Villa",
  price = "$1,250,000",
  address = "123 Luxury Lane, Beverly Hills, CA",
  bedrooms = 4,
  bathrooms = 3,
  squareFootage = 2800,
  isFeatured = false,
  onClick = () => console.log("Property card clicked"),
}: PropertyCardProps) => {
  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-xl bg-white cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative">
        <div className="overflow-hidden h-[220px]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {isFeatured && (
          <Badge className="absolute top-3 left-3 bg-blue-600 hover:bg-blue-700">
            Featured
          </Badge>
        )}

        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-white/80 hover:bg-white rounded-full h-8 w-8"
          onClick={(e) => {
            e.stopPropagation();
            console.log("Favorite toggled");
          }}
        >
          <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
        </Button>
      </div>

      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg truncate">{title}</h3>
          <p className="font-bold text-blue-600">{price}</p>
        </div>

        <p className="text-gray-500 text-sm mb-4 truncate">{address}</p>

        <div className="flex justify-between text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="h-4 w-4" />
            <span>{squareFootage} sq ft</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="px-4 pb-4 pt-0">
        <Button
          variant="outline"
          className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            console.log("View details clicked");
          }}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
