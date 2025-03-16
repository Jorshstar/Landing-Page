import React from "react";
import PropertyCard from "./PropertyCard";
import { Button } from "./ui/button";

interface FeaturedListingsProps {
  title?: string;
  subtitle?: string;
  properties?: Array<{
    id: string;
    image: string;
    title: string;
    price: string;
    address: string;
    bedrooms: number;
    bathrooms: number;
    squareFootage: number;
    isFeatured: boolean;
  }>;
  onViewAllClick?: () => void;
}

const FeaturedListings = ({
  title = "Featured Properties",
  subtitle = "Discover our handpicked selection of premium properties",
  properties = [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
      title: "Modern Luxury Villa",
      price: "$1,250,000",
      address: "123 Luxury Lane, Beverly Hills, CA",
      bedrooms: 4,
      bathrooms: 3,
      squareFootage: 2800,
      isFeatured: true,
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      title: "Elegant Family Home",
      price: "$850,000",
      address: "456 Family Avenue, Santa Monica, CA",
      bedrooms: 3,
      bathrooms: 2,
      squareFootage: 2200,
      isFeatured: false,
    },
    {
      id: "3",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
      title: "Downtown Penthouse",
      price: "$1,750,000",
      address: "789 Skyline Drive, Los Angeles, CA",
      bedrooms: 3,
      bathrooms: 3.5,
      squareFootage: 3100,
      isFeatured: true,
    },
    {
      id: "4",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
      title: "Coastal Retreat",
      price: "$975,000",
      address: "321 Ocean View, Malibu, CA",
      bedrooms: 2,
      bathrooms: 2,
      squareFootage: 1800,
      isFeatured: false,
    },
    {
      id: "5",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
      title: "Contemporary Townhouse",
      price: "$720,000",
      address: "555 Modern Street, Venice, CA",
      bedrooms: 3,
      bathrooms: 2.5,
      squareFootage: 2000,
      isFeatured: false,
    },
    {
      id: "6",
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
      title: "Hillside Mansion",
      price: "$2,350,000",
      address: "888 Highland Drive, Hollywood Hills, CA",
      bedrooms: 5,
      bathrooms: 4.5,
      squareFootage: 4200,
      isFeatured: true,
    },
  ],
  onViewAllClick = () => console.log("View all properties clicked"),
}: FeaturedListingsProps) => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
            <p className="text-gray-600 max-w-2xl">{subtitle}</p>
          </div>
          <Button
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
            onClick={onViewAllClick}
          >
            View All Properties
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              image={property.image}
              title={property.title}
              price={property.price}
              address={property.address}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              squareFootage={property.squareFootage}
              isFeatured={property.isFeatured}
              onClick={() => console.log(`Property ${property.id} clicked`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
