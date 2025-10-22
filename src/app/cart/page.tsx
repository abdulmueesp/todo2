"use client";

import { useState } from "react";
import Link from "next/link";

export default function CartPage() {
  const [cartCount] = useState(0);
  
  // Font style variable
  const nunitoFont = { fontFamily: 'var(--font-nunito), sans-serif' };

  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-0">
      {/* Header - Same as other pages */}
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
              <Link href="/products" className="text-gray-700 hover:text-gray-900 font-medium transition-colors" style={nunitoFont}>
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

      {/* Cart Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="text-center">
         
          {/* Empty Cart Message */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 max-w-md mx-auto">
            <div className="mb-6">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            
            <h2 className="text-base sm:text-xl font-semibold text-gray-800 mb-2" style={nunitoFont}>
              Cart is Empty
            </h2>
            <p className="text-gray-600 mb-6" style={nunitoFont}>
              Your shopping cart is currently empty. Start adding some products to see them here.
            </p>
            
            <Link 
              href="/products"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-3 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              style={nunitoFont}
            >
              Continue Shopping
            </Link>
          </div>
        </div>
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
              'text-blue-600'
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
