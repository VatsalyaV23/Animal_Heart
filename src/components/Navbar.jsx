import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 fixed w-full top-0 z-50">
      <div className="flex justify-between items-center h-20 px-8 max-w-[1280px] mx-auto">
        {/* Logo & Navigation */}
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-black text-slate-900 dark:text-white">
            Animal Heart
          </Link>
          <nav className="hidden md:flex items-center gap-6 font-plus-jakarta-sans text-sm font-semibold tracking-tight">
            <Link to="/" className="text-red-600 dark:text-red-500 border-b-2 border-red-600 pb-1 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200">
              Shop
            </Link>
            <a href="#clinic" className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200">
              Clinic Services
            </a>
            <a href="#appointment" className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200">
              Book Appointment
            </a>
          </nav>
        </div>

        {/* Right Side: Search, Emergency, Cart, Account */}
        <div className="flex items-center gap-6">
          {/* Search Bar (Hidden on mobile) */}
          <div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant">
            <span className="material-symbols-outlined text-outline mr-2">search</span>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none focus:ring-0 text-sm w-48 font-body-md"
            />
          </div>

          {/* Emergency Contact */}
          <button className="text-primary font-semibold text-sm hover:opacity-80 transition-opacity">
            Emergency Contact
          </button>

          {/* Cart & Account Icons */}
          <div className="flex items-center gap-4 border-l border-slate-200 pl-4">
            <button className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">shopping_cart</span>
            </button>
            <button className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;