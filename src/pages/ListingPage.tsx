import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";
import ListingFilters from "../components/ListingFilters";
import { Button } from "../components/ui/button";
import { ChevronDown, Grid3X3, List, SlidersHorizontal } from "lucide-react";

const ListingPage = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("newest");

  // Mock data for properties
  const properties = [
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
    {
      id: "7",
      image:
        "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80",
      title: "Beachfront Condo",
      price: "$1,150,000",
      address: "123 Beach Drive, Santa Monica, CA",
      bedrooms: 2,
      bathrooms: 2,
      squareFootage: 1500,
      isFeatured: false,
    },
    {
      id: "8",
      image:
        "https://images.unsplash.com/photo-1600047508788-26bb381de4fd?w=600&q=80",
      title: "Urban Loft",
      price: "$895,000",
      address: "456 Downtown Ave, Los Angeles, CA",
      bedrooms: 1,
      bathrooms: 1.5,
      squareFootage: 1200,
      isFeatured: false,
    },
    {
      id: "9",
      image:
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",
      title: "Suburban Ranch",
      price: "$780,000",
      address: "789 Quiet Street, Pasadena, CA",
      bedrooms: 3,
      bathrooms: 2,
      squareFootage: 1900,
      isFeatured: false,
    },
  ];

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    // Implement sorting logic here
  };

  const handleFilterChange = (filters: any) => {
    console.log("Filters changed:", filters);
    // Implement filtering logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header transparent={false} />

      <main className="pt-24 pb-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Property Listings
            </h1>
            <p className="text-gray-600">
              Browse our extensive collection of properties
            </p>
          </div>

          {/* Filters and Sort Controls */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <Button
              variant="outline"
              className="flex items-center gap-2 md:w-auto w-full justify-center"
              onClick={toggleFilters}
            >
              <SlidersHorizontal size={18} />
              Filters
            </Button>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select
                  className="border rounded-md px-2 py-1 text-sm bg-white"
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                >
                  <option value="newest">Newest</option>
                  <option value="price_low">Price (Low to High)</option>
                  <option value="price_high">Price (High to Low)</option>
                  <option value="beds">Beds (Most)</option>
                  <option value="baths">Baths (Most)</option>
                  <option value="sqft">Square Feet (Most)</option>
                </select>
              </div>

              <div className="flex items-center border rounded-md overflow-hidden">
                <button
                  className={`px-3 py-1.5 ${viewMode === "grid" ? "bg-blue-600 text-white" : "bg-white text-gray-600"}`}
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 size={18} />
                </button>
                <button
                  className={`px-3 py-1.5 ${viewMode === "list" ? "bg-blue-600 text-white" : "bg-white text-gray-600"}`}
                  onClick={() => setViewMode("list")}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters Sidebar - Always visible on larger screens */}
            <div
              className={`md:block ${showFilters ? "block" : "hidden"} md:w-1/4 w-full`}
            >
              <ListingFilters onFilterChange={handleFilterChange} />
            </div>

            {/* Property Grid */}
            <div className="md:w-3/4 w-full">
              <div className="mb-4">
                <p className="text-gray-600">
                  Showing{" "}
                  <span className="font-medium">{properties.length}</span>{" "}
                  properties
                </p>
              </div>

              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      onClick={() =>
                        console.log(`Property ${property.id} clicked`)
                      }
                    />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {properties.map((property) => (
                    <div
                      key={property.id}
                      className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() =>
                        console.log(`Property ${property.id} clicked`)
                      }
                    >
                      <div className="md:w-1/3 h-48 md:h-auto relative">
                        <img
                          src={property.image}
                          alt={property.title}
                          className="w-full h-full object-cover"
                        />
                        {property.isFeatured && (
                          <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                            Featured
                          </div>
                        )}
                      </div>
                      <div className="p-4 md:w-2/3 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-lg">
                              {property.title}
                            </h3>
                            <p className="font-bold text-blue-600">
                              {property.price}
                            </p>
                          </div>
                          <p className="text-gray-500 text-sm mb-4">
                            {property.address}
                          </p>
                        </div>

                        <div className="flex flex-wrap justify-between text-sm text-gray-600 mb-4">
                          <div className="flex items-center gap-1 mr-4 mb-2">
                            <Bed className="h-4 w-4" />
                            <span>{property.bedrooms} Beds</span>
                          </div>
                          <div className="flex items-center gap-1 mr-4 mb-2">
                            <Bath className="h-4 w-4" />
                            <span>{property.bathrooms} Baths</span>
                          </div>
                          <div className="flex items-center gap-1 mb-2">
                            <Maximize className="h-4 w-4" />
                            <span>{property.squareFootage} sq ft</span>
                          </div>
                        </div>

                        <Button
                          variant="outline"
                          className="w-full md:w-auto border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            console.log("View details clicked");
                          }}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Pagination */}
              <div className="mt-8 flex justify-center">
                <nav className="flex items-center gap-1">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-blue-600 text-white"
                  >
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <span className="px-2">...</span>
                  <Button variant="outline" size="sm">
                    10
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ListingPage;
