
"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [cartCount, setCartCount] = useState(3);
  
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[60px]">
            {/* Logo */}
            <div className="flex flex-col items-start">
              <h1 className="text-[15px] sm:text-xl font-extrabold sm:font-bold text-gray-700  ">Classic</h1>
              <p className="text-[10px] sm:text-xs text-red-900 font-local2">Electronics and Furnitures</p>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
              <a href="#products" className="text-gray-700 hover:text-gray-900 font-medium transition-colors font-local2">
                Products
              </a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors font-local2">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors font-local2">
                Contact
              </a>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-3 lg:space-x-4">
              {/* Cart Icon */}
              <div className="relative">
                <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </button>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {cartCount}
                  </span>
                )}
              </div>

              {/* User Icon */}
              <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
        <div className="text-center mb-4 sm:mb-8">
          <p className="text-xl sm:text-3xl  font-bold mb-[2px] text-gray-900 font-local2">Our Categories</p>
          <p className="text-gray-600 max-w-2xl mx-auto  text-[10px] sm:text-sm">
            Explore our wide range of products
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-2 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Electronics Category */}
          <div className="group relative overflow-hidden rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="aspect-[16/9] sm:aspect-[16/8] lg:aspect-[16/7]">
              <img
                src="/electronics.png"
                alt="Electronics"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              {/* Top-left tag */}
              <span className="absolute top-2 left-2 px-2 py-1 rounded-md text-[10px] sm:text-xs font-semibold bg-red-900/90 text-white shadow">
                Electronics
              </span>
            </div>
          </div>

          {/* Furniture Category */}
          <div className="group relative overflow-hidden rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="aspect-[16/9] sm:aspect-[16/8] lg:aspect-[16/7]">
              <img
                src="/furniture.png"
                alt="Furniture"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              {/* Top-left tag */}
              <span className="absolute top-2 left-2 px-2 py-1 rounded-md text-[10px] sm:text-xs font-semibold bg-red-900/90 text-white shadow">
                Furniture
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}