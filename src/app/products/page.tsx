"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [cartCount, setCartCount] = useState(3);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  
  // Font style variable
  const nunitoFont = { fontFamily: 'var(--font-nunito), sans-serif' };
  
  // Product images array for looping
  const productImages = ["/iron2.jpg","/mixi.webp","/ssofa.webp"];
  
  // Same 10 products as homepage
  const products = [
    { id: 1, name: "Iron Box", price: "₹2,999", originalPrice: "₹3,749", offerPrice: "₹2,999", image: productImages[0], category: "electronics" },
    { id: 2, name: "Mixi Regal", price: "₹5,999", originalPrice: "₹7,499", offerPrice: "₹5,999", image: productImages[1], category: "electronics" },
    { id: 3, name: "Fabric Sofa", price: "₹2,499", image: productImages[2], category: "furniture" },
    { id: 4, name: "Iron Box", price: "₹1,499", image: productImages[0], category: "electronics" },
    { id: 5, name: "Mixi Regal", price: "₹3,999", image: productImages[1], category: "electronics" },
    { id: 6, name: "Fabric Sofa", price: "₹1,199", image: productImages[2], category: "furniture" },
    { id: 7, name: "Iron Box", price: "₹899", image: productImages[0], category: "electronics" },
    { id: 8, name: "Mixi Regal", price: "₹1,799", image: productImages[1], category: "electronics" },
    { id: 9, name: "Fabric Sofa", price: "₹2,699", image: productImages[2], category: "furniture" },
    { id: 10, name: "Iron Box", price: "₹1,049", image: productImages[0], category: "electronics" }
  ];

  // Filter products based on search, category, and price
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    
    let matchesPrice = true;
    if (priceRange !== 'all') {
      const price = parseInt(product.price.replace(/[₹,]/g, ''));
      switch (priceRange) {
        case 'under-1000':
          matchesPrice = price < 1000;
          break;
        case '1000-3000':
          matchesPrice = price >= 1000 && price <= 3000;
          break;
        case '3000-5000':
          matchesPrice = price >= 3000 && price <= 5000;
          break;
        case 'above-5000':
          matchesPrice = price > 5000;
          break;
      }
    }
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-0">
      {/* Header - Same as homepage */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[55px] md:h-[60px]">
            {/* Logo */}
            <div className="flex flex-col items-start">
              <img
                src="/loggo.jpeg"
                alt="Classic Electronics and Furnitures"
                className="h-6 md:h-7 w-auto object-contain"
                loading="eager"
              />
              <p className="text-blue-600 font-bold text-[10px] sm:text-sm" style={nunitoFont}>Electronics and Furnitures</p>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
              <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors" style={nunitoFont}>
                Home
              </Link>
              <Link href="/products" className="text-blue-600 font-medium transition-colors" style={nunitoFont}>
                Products
              </Link>
              <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors" style={nunitoFont}>
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors" style={nunitoFont}>
                Contact
              </a>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-3 lg:space-x-4">
              {/* Cart Icon - Desktop Only */}
              <a href="/cart">
              <div className="hidden md:block relative">
                <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </button>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {cartCount}
                  </span>
                )}
              </div>
              </a>

              {/* User Icon */}
              <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search and Filters Section */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filters in Same Line */}
          <div className="flex flex-col lg:flex-row gap-4 items-start sm:items-center justify-center">
            {/* Search Input */}
            <div className="w-full lg:w-96 xl:w-[550px]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  style={nunitoFont}
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-gray-700 whitespace-nowrap" style={nunitoFont}>Category:</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[140px]"
                  style={nunitoFont}
                >
                  <option value="all">All Categories</option>
                  <option value="electronics">Electronics</option>
                  <option value="furniture">Furniture</option>
                </select>
              </div>

              {/* Price Filter */}
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-gray-700 whitespace-nowrap" style={nunitoFont}>Price:</label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[140px]"
                  style={nunitoFont}
                >
                  <option value="all">All Prices</option>
                  <option value="under-1000">Under ₹1,000</option>
                  <option value="1000-3000">₹1,000 - ₹3,000</option>
                  <option value="3000-5000">₹3,000 - ₹5,000</option>
                  <option value="above-5000">Above ₹5,000</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="mb-8">
          <h1 className="text-xl sm:text-4xl font-bold text-gray-900 mb-2" style={nunitoFont}>
            All Products
          </h1>
          <p className="text-gray-600 text-base sm:text-lg" style={nunitoFont}>
            {filteredProducts.length} products found
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              {/* Product Image */}
              <div className="relative w-full h-48 sm:h-52 lg:h-56 p-4 md:p-2">
                {product.offerPrice && (
                  <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] sm:text-xs font-semibold px-2 py-1 rounded" style={nunitoFont}>
                    20% OFF
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-t-lg"
                  loading="lazy"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-4 pt-0">
                <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2" style={nunitoFont}>
                  {product.name}
                </h3>
                {product.offerPrice ? (
                  <div className="mb-3" style={nunitoFont}>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                      <span className="text-lg font-bold text-red-600">{product.offerPrice}</span>
                    </div>
                  </div>
                ) : (
                  <p className="text-lg font-bold text-black mb-3" style={nunitoFont}>
                    {product.price}
                  </p>
                )}
                
                {/* Add to Cart Button */}
                <button 
                  className="w-full border-blue-600 text-blue-600 border text-sm font-medium py-2 px-4 rounded-md transition-colors duration-200"
                  onClick={() => setCartCount(prev => prev + 1)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg" style={nunitoFont}>
              No products found matching your criteria.
            </p>
          </div>
        )}
      </div>

      {/* Bottom Navigation - Mobile Only */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden">
        <div className="flex items-center justify-around h-16 px-4">
          {/* Home */}
          <Link
            href="/"
            className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-colors ${
              'text-gray-600 hover:text-gray-900'
            }`}
          >
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs font-medium" style={nunitoFont}>Home</span>
          </Link>

          {/* Products */}
          <Link
            href="/products"
            className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-colors ${
              'text-blue-600'
            }`}
          >
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span className="text-xs font-medium" style={nunitoFont}>Products</span>
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-colors ${
              'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="relative mb-1">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="text-xs font-medium" style={nunitoFont}>Cart</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
