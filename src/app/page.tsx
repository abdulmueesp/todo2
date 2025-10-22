
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
          src: "/banner1.png",
          alt: "Banner 1"
        },
        {
           src: "/banner1.png",
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
      {/* Banner Carousel */}
      <div className="relative w-full h-min sm:h-[350px] md:h-[450px] lg:h-[550px] overflow-hidden bg-gray-900">
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
              {/* Overlay gradient for better text readability */}
              {/* <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20"></div> */}
            </div>
          ))}
        </div>
        
        {/* Header Overlay */}
        <header className="absolute top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo */}
              <div className="flex flex-col items-start">
                <h1 className="text-lg sm:text-xl md:text-2xl  font-bold text-gray-700 font-local2">Classic</h1>
                <p className="text-xs  text-gray-600 font-local2">Electronics and Furnitures</p>
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

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover what we can do for you
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Quality Products</h3>
              <p className="text-gray-600">Premium quality products curated just for you.</p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable shipping to your doorstep.</p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">24/7 Support</h3>
              <p className="text-gray-600">Always here to help with your questions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}