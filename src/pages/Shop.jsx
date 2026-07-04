import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart, User, Menu, X, Star, Search, ChevronLeft, ChevronRight, Grid3x3, List } from 'lucide-react';

const Shop = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('popular');
  const [selectedCategories, setSelectedCategories] = useState(['Cats']);
  const [priceRange, setPriceRange] = useState(250);
  const [setCurrentPage] = useState(1);

  const navLinks = [
    { label: 'Shop', href: '/shop' },
    { label: 'Clinic', href: '/clinic' },
    { label: 'Grooming', href: '/clinic' },
    { label: 'About Us', href: '/' },
  ];

  const products = [
    {
      id: 1,
      name: 'Wild Peak Adult Kibble',
      price: 59.99,
      rating: 4.9,
      reviews: 128,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIc4rRwQX9kqUPzSKG9hIYnWmQqCw4lQgfjY_AxBfyW7eT1Yh_I4F-lTmCpqOSO_GK_9fx4-O2ZuPLbwD49b-Xzz2R8u6JSYDTNdzMsdWRsn761K6qGs2qyGFRmQI40zOfPeGy6-efkXiqKSfxYP1iOCuGMnj4BpJjIA6ML5EYbOrT66HWfD5m0pfIIWipAG8ZRHIyJcpVZc4QwBh5alf162r5VwTvD_64IYWGNlzsxPU-IzQ4KrMv8tSfYJ27PuoKt-td3AdsI5et',
      badge: 'Organic',
      category: 'Dogs',
    },
    {
      id: 2,
      name: 'ZenFlow Ceramic Fountain',
      price: 84.5,
      rating: 4.7,
      reviews: 84,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2OKQM3j4OGKXkf6QK-Ia4xrB1pPySuoQr6PH-J2Q3P8TurudGk5F-NWZOCHr2zw0aMkc8Sejv0p4AlQzaUIlaDcKdFpGYYTkc9g3vjuCCHC7ECfsWL2qaMU-M6n4Ju7gxas8NH7ZMhr6xYcnTmA6vnMvg22LYc64jSbz0ojEMSKBxweDGUjCst9w0uHbz1Zm9pmhBTUnCdWPuJB2cdXe_n9Wdi6gF0wDOK348racmulzCkIw_6bF9AYk3JH5nlPM2kapmnBrTeY5E',
      badge: 'New Arrival',
      category: 'Cats',
    },
    {
      id: 3,
      name: 'CloudNine Orthopedic Bed',
      price: 129.0,
      rating: 5.0,
      reviews: 210,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDA9RZvs041ktJGxjS_VfuIPBZoux8XmttfnDsU7wn7v-nQTIXlWm7i_6OYQe89LDm8jVt0ZODAHynsSWQAaGPwn7Kx-K9U2P9yvu8Smx3yKHJZk9VJJ-Dc7IlKZb2II9NP9U7Gpq6pHeC2bcLiX9tEbiuQGe6aft-W8py8m2N7918ja1vF0atB_95F9NeMFqY-l6sKpucSwKCRaiQdxRJPzJTAORebkp9X8zvqr3zBwVIjb6jfgwBgsZoQhnPhqG81v9681-9neHHG',
      badge: null,
      category: 'Dogs',
    },
    {
      id: 4,
      name: 'ProGroom Master Kit',
      price: 42.0,
      rating: 4.8,
      reviews: 45,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLPy8tuaGUQzIadxNhX_LUqBIcGKAKY6Z3aS0ppbu7876MIequ2Nsww3p_GcxWkEOv7M1_UI3-nG4A_uHbaYzVti6N3F29j2EYD2GXduXoI3guGu4eydpK9lNDv2Aig76WjSldEkjxwBQYjT0St-r-vkJSNwET6Kam5sWoTq7ODVS_WoEjClCaNOLZlSOEFRu4LI64DRxnAb2CrgaH8l7z_ItKBUoGsJg95x7CVWFDGzUMcpzRYnv6ksAn60HV8frpE19-KnFrP35u',
      badge: null,
      category: 'Accessories',
    },
    {
      id: 5,
      name: 'SmileBrite Dental Chews',
      price: 18.99,
      rating: 4.9,
      reviews: 312,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHBmb1Too96FF8tpPb8spSoi2YBCl9uzQWCI2uC6fNXpnVJVEv1zEPldpXYUt3EtSbpU_MMmtQsfMFEdA8N_6yOde9DmOQf9td-VbW3bsjU8fm-iOVoeBct9SiKoNN1uV_cHSCsfC7i1ii1GgUDNhCBdeBkqouVzbcoJaFTQwFNI7DI1dHIQZYN6ihLrbRQVkrcxIL5S-SdUNKQqkc04rqkscgxxhIyNE4Up8a_qNqgti7M5oife_FHUamYCAvYQ5eDd9hdC55QlIi',
      badge: 'Bestseller',
      category: 'Treats',
    },
    {
      id: 6,
      name: 'TitanGrip Safety Harness',
      price: 34.0,
      rating: 4.6,
      reviews: 67,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQRvibdgjQAiUmz0hWSbPbQgF_TU3uuePvtL3wa1EvYh1m7pmJmpJznRK2gvm94_KHU7q7gixt8a2s4aE68F0frq1ChBlkmd1EDgIgsFPk1b9Y8VDTGKfmYmEm9UAiQTsVmfcWNr3ZHmymklxf1FdtHuaKleTASpCFo7X09fDi95A93CdCj1COGn7_leUD2N7gRqytBGWPW-s_FZ7kUfn_G7fofXk-iMmYsfdNj_K3a12fiLbBZEZ_tLTacT_vxCDV0VQp0iaGLkB8',
      badge: null,
      category: 'Dogs',
    },
  ];

  const categories = ['Dogs', 'Cats', 'Food & Nutrition', 'Treats', 'Accessories'];
  const brands = ['Royal Canin', 'Hill\'s Science Diet', 'Blue Buffalo', 'Orijen'];
  const petAges = ['Puppy/Kitten', 'Adult', 'Senior'];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    setCurrentPage(1);
  };

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const priceMatch = product.price <= priceRange;
    return categoryMatch && priceMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return b.id - a.id;
      default:
        return b.reviews - a.reviews;
    }
  });

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 w-full z-50 flex items-center justify-between px-6 lg:px-12 h-20 bg-white/70 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="flex items-center gap-2">
          <Heart className="text-red-600 w-8 h-8 fill-red-600" />
          <span className="text-2xl font-bold text-red-600">AnimalHeart</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(link.href)}
              className={`text-sm font-semibold transition-colors ${
                index === 0
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-600 hover:text-red-600'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-6 py-2 border border-gray-200">
          <Search className="text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent border-none focus:outline-none text-sm ml-3 w-48"
          />
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button className="text-gray-600 hover:opacity-80 transition-opacity active:scale-95" aria-label="Shopping cart">
            <ShoppingCart className="w-6 h-6" />
          </button>
          <button className="text-gray-600 hover:opacity-80 transition-opacity active:scale-95" aria-label="User profile">
            <User className="w-6 h-6" />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-600 hover:opacity-80 transition-opacity"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 py-4">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(link.href)}
              className="block py-3 w-full text-left text-gray-600 hover:text-red-600 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        {/* Breadcrumbs & Title */}
        <div className="mb-12">
          <nav aria-label="Breadcrumb" className="flex text-sm text-gray-600 mb-4">
            <ol className="flex items-center space-x-2">
              <li>
                <button onClick={() => handleNavigation('/')} className="hover:text-red-600 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <span className="text-gray-400">›</span>
              </li>
              <li className="text-red-600 font-bold">Shop</li>
            </ol>
          </nav>
          <h1 className="text-5xl font-bold text-gray-900">Premium Pet Supplies</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
            {/* Mobile Filter Toggle */}
            <button className="lg:hidden w-full p-4 bg-white rounded-xl shadow-sm flex items-center justify-between border border-gray-200">
              <span className="font-bold">Filters</span>
              <span>⚙️</span>
            </button>

            {/* Filter Groups - Hidden on mobile, visible on lg */}
            <div className="hidden lg:block space-y-8">
              {/* Categories */}
              <section>
                <h3 className="font-bold text-gray-900 uppercase tracking-wider mb-4 text-xs">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-600 cursor-pointer"
                      />
                      <span className="group-hover:text-red-600 transition-colors text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </section>

              {/* Pet Age */}
              <section>
                <h3 className="font-bold text-gray-900 uppercase tracking-wider mb-4 text-xs">Pet Age</h3>
                <div className="flex flex-wrap gap-2">
                  {petAges.map((age) => (
                    <button
                      key={age}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        age === 'Puppy/Kitten'
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {age}
                    </button>
                  ))}
                </div>
              </section>

              {/* Price Range */}
              <section>
                <h3 className="font-bold text-gray-900 uppercase tracking-wider mb-4 text-xs">Price Range</h3>
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                />
                <div className="flex justify-between mt-3 text-sm text-gray-600">
                  <span>$0</span>
                  <span>${priceRange}+</span>
                </div>
              </section>

              {/* Brands */}
              <section>
                <h3 className="font-bold text-gray-900 uppercase tracking-wider mb-4 text-xs">Premium Brands</h3>
                <div className="space-y-3">
                  {brands.map((brand) => (
                    <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="brand"
                        className="w-4 h-4 border-gray-300 text-red-600 focus:ring-red-600 cursor-pointer"
                      />
                      <span className="group-hover:text-red-600 transition-colors text-sm">{brand}</span>
                    </label>
                  ))}
                </div>
              </section>
            </div>
          </aside>

          {/* Product Grid Area */}
          <div className="flex-1">
            {/* Sorting Bar */}
            <div className="bg-white rounded-xl p-4 mb-8 flex items-center justify-between border border-gray-200 flex-col md:flex-row gap-4">
              <p className="text-sm text-gray-600">
                Showing <span className="font-bold text-gray-900">{sortedProducts.length}</span> products
              </p>
              <div className="flex items-center gap-6 flex-col md:flex-row w-full md:w-auto">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600 hidden sm:inline">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent border-none text-sm font-semibold focus:outline-none cursor-pointer"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest Arrivals</option>
                  </select>
                </div>
                <div className="flex items-center gap-2 border-l border-gray-300 pl-6">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded transition-colors ${viewMode === 'grid' ? 'text-red-600' : 'text-gray-600 hover:text-red-600'}`}
                    aria-label="Grid view"
                  >
                    <Grid3x3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded transition-colors ${viewMode === 'list' ? 'text-red-600' : 'text-gray-600 hover:text-red-600'}`}
                    aria-label="List view"
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-12'
                  : 'space-y-4 mb-12'
              }
            >
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className={
                    viewMode === 'grid'
                      ? 'group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100'
                      : 'group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex'
                  }
                >
                  <div
                    className={
                      viewMode === 'grid'
                        ? 'aspect-square relative overflow-hidden bg-gray-100'
                        : 'w-32 h-32 relative overflow-hidden bg-gray-100 flex-shrink-0'
                    }
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {product.badge && (
                      <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-lg text-xs font-semibold uppercase">
                        {product.badge}
                      </div>
                    )}
                    <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-md text-gray-600 hover:text-red-600 transition-colors" aria-label="Add to wishlist">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>

                  <div className={viewMode === 'grid' ? 'p-6' : 'p-6 flex-1 flex flex-col'}>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-xs font-bold ml-1 text-gray-900">{product.rating}</span>
                      <span className="text-xs text-gray-600">({product.reviews})</span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                      {product.name}
                    </h3>

                    <div className={viewMode === 'grid' ? 'flex items-center justify-between mt-4' : 'flex items-center justify-between mt-auto'}>
                      <span className="text-2xl font-bold text-red-600">${product.price}</span>
                      <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-red-700 active:scale-95 transition-all">
                        <ShoppingCart className="w-4 h-4" />
                        <span className="hidden sm:inline">Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mb-12">
              <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-300 text-gray-600 hover:border-red-600 hover:text-red-600 transition-all" aria-label="Previous page">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-red-600 text-white font-bold">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-300 text-gray-600 hover:border-red-600 hover:text-red-600 transition-all">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-300 text-gray-600 hover:border-red-600 hover:text-red-600 transition-all">
                3
              </button>
              <span className="px-2 text-gray-600">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-300 text-gray-600 hover:border-red-600 hover:text-red-600 transition-all">
                8
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-300 text-gray-600 hover:border-red-600 hover:text-red-600 transition-all" aria-label="Next page">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 bg-gray-100 border-t border-gray-300 mt-16">
        <div className="space-y-4">
          <span className="text-xl font-bold text-red-600">AnimalHeart</span>
          <p className="text-gray-600 text-sm max-w-xs">
            © 2024 AnimalHeart. Compassionate care for every pet.
          </p>
          <div className="flex gap-4">
            <a href="https://facebook.com" className="text-red-600 hover:opacity-80 transition-opacity" rel="noopener noreferrer" target="_blank" aria-label="Facebook">
              <span className="text-sm">f</span>
            </a>
            <a href="https://twitter.com" className="text-red-600 hover:opacity-80 transition-opacity" rel="noopener noreferrer" target="_blank" aria-label="Twitter">
              <span className="text-sm">𝕏</span>
            </a>
            <a href="mailto:care@animalheart.com" className="text-red-600 hover:opacity-80 transition-opacity" aria-label="Email">
              <span className="text-sm">✉</span>
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-bold text-gray-900 uppercase tracking-wider text-sm">Services</h4>
          <nav className="flex flex-col gap-2">
            <button onClick={() => handleNavigation('/clinic')} className="text-gray-600 hover:text-red-600 transition-colors text-sm">
              Vet Clinic
            </button>
            <button onClick={() => handleNavigation('/clinic')} className="text-gray-600 hover:text-red-600 transition-colors text-sm">
              Grooming
            </button>
            <button onClick={() => handleNavigation('/clinic')} className="text-gray-600 hover:text-red-600 transition-colors text-sm">
              Consultation
            </button>
            <button onClick={() => handleNavigation('/clinic')} className="text-gray-600 hover:text-red-600 transition-colors text-sm">
              Emergency
            </button>
          </nav>
        </div>

        <div className="space-y-3">
          <h4 className="font-bold text-gray-900 uppercase tracking-wider text-sm">Shop</h4>
          <nav className="flex flex-col gap-2">
            <button onClick={() => handleNavigation('/shop')} className="text-gray-600 hover:text-red-600 transition-colors text-sm">
              Pet Food
            </button>
            <button onClick={() => handleNavigation('/shop')} className="text-gray-600 hover:text-red-600 transition-colors text-sm">
              Accessories
            </button>
            <button onClick={() => handleNavigation('/shop')} className="text-gray-600 hover:text-red-600 transition-colors text-sm">
              Pharmacy
            </button>
            <button onClick={() => handleNavigation('/shop')} className="text-gray-600 hover:text-red-600 transition-colors text-sm">
              New Arrivals
            </button>
          </nav>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-gray-900 uppercase tracking-wider text-sm">Newsletter</h4>
          <p className="text-sm text-gray-600">Stay updated with pet care tips and exclusive offers.</p>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="bg-white border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm"
            />
            <button className="bg-red-600 text-white py-2 rounded-xl text-sm font-bold hover:bg-red-700 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Shop;
