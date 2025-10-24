
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [cartCount, setCartCount] = useState(3);
  
  // Font style variable
  const nunitoFont = { fontFamily: 'var(--font-nunito), sans-serif' };
  
  // Product images array for looping
  const productImages = ["/iron2.jpg","/mixi.webp","/ssofa.webp"];
  
  // Dummy products data with Indian Rupees
  const products = [
    { id: 1, name: "Iron Box", price: "₹2,999", originalPrice: "₹3,749", offerPrice: "₹2,999", image: productImages[0] },
    { id: 2, name: "Mixi Regal", price: "₹5,999", originalPrice: "₹7,499", offerPrice: "₹5,999", image: productImages[1] },
    { id: 3, name: "Fabric Sofa", price: "₹2,499", image: productImages[2] },
    { id: 4, name: "Iron Box", price: "₹1,499", image: productImages[0] },
    { id: 5, name: "Mixi Regal", price: "₹3,999", image: productImages[1] },
    { id: 6, name: "Fabric Sofa", price: "₹1,199", image: productImages[2] },
    { id: 7, name: "Iron Box", price: "₹899", image: productImages[0] },
    { id: 8, name: "Mixi Regal", price: "₹1,799", image: productImages[1] },
    { id: 9, name: "Fabric Sofa", price: "₹2,699", image: productImages[2] },
    { id: 10, name: "Power Bank", price: "₹1,049", image: productImages[0] }
  ];
  
  const banners = [
        {
          src: "/banner1.png",
          alt: "Banner 1"
        },
        {
          src: "/banner2.jpg",
          alt: "Banner 1"
        },
        {
           src: "/banner5.png",
          alt: "Banner 3" 
          
        }
      ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000); // 5 seconds per banner

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-0">
      {/* Header */}
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
              <a href="/products" className="text-gray-700 hover:text-gray-900 font-medium transition-colors" style={nunitoFont}>
                Products
              </a>
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

      {/* Banner Carousel */}
      <div className="relative w-full h-[190px] md:h-[400px] overflow-hidden bg-gray-900">
        {/* Banner Images */}
        <div 
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentBanner * 100}%)` }}
        >
          {banners.map((banner, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              <img
                src={banner.src}
                alt={banner.alt}
                className="w-full h-full object-contain lg:object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
        
        {/* Banner Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-40">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`transition-all duration-300 rounded-full ${
                index === currentBanner 
                  ? 'w-8 h-3 bg-white' 
                  : 'w-3 h-3 bg-white/50 hover:bg-white/75'
              }`}
              onClick={() => setCurrentBanner(index)}
              aria-label={`Go to banner ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={() => setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all hidden sm:block"
          aria-label="Previous banner"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={() => setCurrentBanner((prev) => (prev + 1) % banners.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all hidden sm:block"
          aria-label="Next banner"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-8 lg:py-10">
        <div className="text-center mb-6 sm:mb-10">
          <p className="text-xl sm:text-3xl font-bold mb-[2px] sm:mb-[8px] text-gray-900" style={nunitoFont}>Our Categories</p>
          <p className="text-gray-600 max-w-2xl mx-auto text-[13px] sm:text-base" style={nunitoFont}>
            Explore our wide range of products
          </p>
        
        </div>
        
        {/* Mobile/Tablet: Circular Design */}
        <div className="flex justify-center items-center gap-8 sm:gap-12 lg:hidden max-w-4xl mx-auto">
          {/* Electronics Category */}
           <Link
            href="/products">
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white border-4 border-gray-100 hover:border-blue-200">
              <img
                src="/electronics.png"
                alt="Electronics"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <span className="mt-4 text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300" style={nunitoFont}>
              Electronics
            </span>
          </div>
          </Link>

          {/* Furniture Category */}
          <Link
            href="/products">
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white border-4 border-gray-100 hover:border-blue-200">
              <img
                src="/furniture.png"
                alt="Furniture"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <span className="mt-4 text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300" style={nunitoFont}>
              Furniture
            </span>
          </div>
          </Link>
        </div>

        {/* Desktop: Rectangular Boxes */}
        <div className="hidden lg:grid grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Electronics Category */}
          <Link
            href="/products">
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="aspect-[16/9] lg:aspect-[16/8] xl:aspect-[16/7]">
              <img
                src="/electronics.png"
                alt="Electronics"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              {/* Top-left tag */}
              <span className="absolute top-4 left-4 px-3 py-2 rounded-md text-sm font-semibold bg-blue-600 text-white shadow" style={nunitoFont}>
                Electronics
              </span>
            </div>
          </div>
          </Link>

          {/* Furniture Category */}
          <Link
            href="/products">
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="aspect-[16/9] lg:aspect-[16/8] xl:aspect-[16/7]">
              <img
                src="/furniture.png"
                alt="Furniture"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              {/* Top-left tag */}
              <span className="absolute top-4 left-4 px-3 py-2 rounded-md text-sm font-semibold bg-blue-600 text-white shadow" style={nunitoFont}>
                Furniture
              </span>
            </div>
          </div>
          </Link>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="mb-4 sm:mb-8">
          <p className="text-xl sm:text-3xl font-bold text-gray-900 mb-1" style={nunitoFont}>
            Popular Products
          </p>
          <p className="text-gray-600 text-[13px] sm:text-base" style={nunitoFont}>
            Discover our best-selling electronics
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-6">
          {products.map((product) => (
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
                      <span className="text-lg font-extrabold text-red-600">{product.offerPrice}</span>
                    </div>
                  </div>
                ) : (
                  <p className="text-lg font-extrabold text-black mb-3" style={nunitoFont}>
                    {product.price}
                  </p>
                )}
                
                {/* Add to Cart Button */}
                <button 
                  className="w-full border-blue-600  text-blue-600 border text-sm font-medium py-2 px-4 rounded-md transition-colors duration-200"
                  onClick={() => setCartCount(prev => prev + 1)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-8 sm:mt-12">
          <a 
            href="/products"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            style={nunitoFont}
          >
            View More Products
          </a>
        </div>
      </div>

      {/* Bottom Navigation - Mobile Only */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden">
        <div className="flex items-center justify-around h-16 px-4">
          {/* Home */}
          <Link
            href="/"
            className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-colors ${
              'text-blue-600'
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
              'text-gray-600 hover:text-gray-900'
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
          <Link
  href="https://wa.me/918139800105"
  target="_blank"
  className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-colors `}
>
  <svg
    className="w-6 h-6 mb-1"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#25D366"
      d="M16.04 2C8.68 2 2.7 7.98 2.7 15.33c0 2.69.79 5.17 2.15 7.26L2 30l7.67-2.41a13.3 13.3 0 006.37 1.63c7.36 0 13.33-5.97 13.33-13.33C29.37 7.98 23.4 2 16.04 2z"
    />
    <path
      fill="#FFF"
      d="M23.08 19.51c-.34-.17-2.03-1.01-2.35-1.13-.32-.12-.55-.17-.78.17-.23.34-.89 1.13-1.09 1.36-.2.23-.4.25-.73.09-.34-.17-1.41-.52-2.68-1.65-.99-.87-1.65-1.93-1.85-2.27-.2-.34-.03-.52.15-.7.17-.17.4-.44.57-.66.17-.23.23-.38.34-.64.12-.26.06-.48-.03-.66-.09-.17-.78-1.88-1.06-2.58-.28-.69-.55-.59-.78-.6-.2-.01-.43-.01-.66-.01s-.59.09-.9.43c-.31.34-1.19 1.16-1.19 2.84 0 1.68 1.23 3.3 1.38 3.52.17.23 2.37 3.63 5.73 5.09.8.34 1.43.56 1.93.72.82.26 1.58.23 2.17.14.66-.1 2.01-.76 2.28-1.48.28-.72.28-1.37.19-1.49-.08-.12-.31-.21-.66-.38z"
    />
  </svg>
  <span className="text-xs font-medium text-gray-600" style={nunitoFont}>WhatsApp</span>
</Link>


        </div>
      </nav>
    </div>
  );
}