import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart, User, Menu, X, Star, Search, Utensils, Sparkles, Stethoscope, ChevronRight } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-observe]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: 'Shop', href: '/shop' },
    { label: 'Clinic', href: '/clinic' },
    { label: 'Grooming', href: '/clinic' },
    { label: 'About Us', href: '/' },
  ];

  const features = [
    {
      icon: Utensils,
      title: 'Premium Food',
      description: 'Nutritious, organic diets selected by veterinarians for optimal health and vitality.',
      link: 'Explore Catalog',
      color: 'from-red-100 to-red-50',
      iconColor: 'text-red-600',
      linkColor: 'text-red-600',
      bgColor: 'bg-red-100',
      onClick: () => navigate('/shop'),
    },
    {
      icon: Sparkles,
      title: 'Grooming Spa',
      description: 'Stress-free grooming experience that leaves your pet feeling refreshed and looking their best.',
      link: 'Book a Session',
      color: 'from-blue-100 to-blue-50',
      iconColor: 'text-blue-600',
      linkColor: 'text-blue-600',
      bgColor: 'bg-blue-100',
      onClick: () => navigate('/clinic'),
    },
    {
      icon: Stethoscope,
      title: 'Wellness Clinic',
      description: 'Advanced medical care, routine checkups, and vaccinations by passionate experts.',
      link: 'Visit Clinic',
      color: 'from-red-900 to-red-800',
      iconColor: 'text-white',
      linkColor: 'text-white',
      bgColor: 'bg-red-900',
      isDark: true,
      onClick: () => navigate('/clinic'),
    },
  ];

  const categories = [
    { name: 'Dogs', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkXI8zpRxo9wczdsX4939amEGTwM6nYET7W8rtN0U-BtjAGNM-bUTytnHcS3q1jxxWYDJPDhJFGMgcVjg4TVZC1z6qSLkoBoOugZUO-KkulxyNsh1MyE43A6sDlDt3mDZ1CB1LpEmZ5P44u56XOGVWL6sXHhs60Tx4lxn9ZF44mbBErAtG_HErbS2dE0WAoZfSDLC_87v_1ozc9bU85mVIgW14pSEEWBoK4XFzG1esV6h0qPrUg3LWJZgZvu65HAJf9zTh5RW8Gc_5' },
    { name: 'Cats', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYtxay8VirxjhAok8Ja8rUKljpcnUBYBWtldaMKCLySGS_Tq6lfvYkZ929l92yGKU4_24GcW54IcZkQ3H8PR258VO9qMzoDsOhHux7BuWjwmfEJkNan4Eh8PlkB0z_lQwXZYW6GOymy3yVT7fRI4WlhsFAzJ_vCCG5bKfvjc9njS5KfaEUr_lc-dFJb14HVmfWsaBhVlTKdQDP0X2o5iBlCvAujgfFd7RhsluZXnXXA-8ZC4_dP5gB6RtSiRGDUC7iu7Lmz4uWpzKL' },
    { name: 'Birds', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtyFhkpBv80GcRFYdSyMZ2ls507GSYzCnUFbLyrfAHuckymcK0e0nKCup5EkXJymzqUtB7OaWbNpbjsNEraFLLkyCYgfIqNP7tX934vNOC7E_agdrZOp3b63T7WjIXANxuwC3LpLEdcMG4m4cz6OlgdWO0_nS3p14GyD_KYxulOdCInflzgZoJwuxi1pFlX1U4CCZdhHyK9hFn-dXOPOIPnEaTUHt-Dhgul8wPIVdhhZsY3W7VRuUw3NTDb_bq_PnVwLUAw4iWXFfP' },
    { name: 'Small Pets', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuw_kEZPuDchMfdeDw-PcPTFQ_Lq0D6NtC2v7ORRpF64M0mkTTSSHolrxZiMYX4T1kb-nIAergh_NLvdV5m3rLEsRO5iWhvdYVYajnqKo-Z3OP_sdvDlt53z_nuldszXtwlUR-3tTwt0e6c9uWRRRemtufrkuGCKpuYlSj1pB1CfJ6Y2SE0VepHJ8WJd958Yh-hl6no7faGFAFOwfIeJdMl7JifJrvLIgD6XX_AlObkscvd57eMRSnk0AziT14CZPdFp0bPs_XVLM' },
  ];

  const products = [
    {
      name: 'Organic Salmon Feast',
      price: '$42.00',
      description: 'Hypoallergenic recipe for active adults.',
      badge: 'Best Seller',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATaOtWM_HcABnUs-RXeWl_i5r-7IEg6MWwqe-2QgRIx-pcaKONtEnChfpAeIvyf_0QTVrpQ2L9bSp8mTXTK3qqURxSK4XC7YdoQPHq99AVxKIjP42vXU2JIBhNcBkrxC4jRWPFPZWQBmFG3FG0INM0eEWiyVoInGp4jbsgEghTydojPweeX5XXBSvIsgVqKTq9aDhdbtU-D6D9Ub5VvgW1NaTIsVcvobLU9qxDYqoKi7bLpW6Hhf_9KnCCQDGPgakzc3AsytYAEeZy',
      badgeColor: 'bg-blue-600',
    },
    {
      name: 'Smart Laser Chaser',
      price: '$29.99',
      description: 'Keep your feline friend active all day.',
      badge: null,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1snD7vNOEDamnO2Jey2T7-MUznY8ciEaItfuvZe_OpdRs8xJ1AqzftvaS1ngM14fw8mW3_ZOTGcU2zl8nxcJ6vSVnoqhAkhYN2KqSTPc4zF8SPKkQT5-S2yJaqjljHY63YXLv8hEvHQsV51jxUWeHch7R280Duxsg-IcYz_1flf3D9FlXDenS2YKBAJQjk47ABpjmezaTx0Sg9Ep3CUTicOmzzHuoUD82qPjXH9WbGa1LdEMv6wY3F1LUgOVSzd9MsoXl3GTACGfG',
      badgeColor: null,
    },
    {
      name: 'Cloud Memory Bed',
      price: '$89.00',
      description: 'Orthopaedic support for senior pets.',
      badge: 'Premium',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYmRtqQoZ-gWb2R1zSrQHsNSyDYeKMqL2GAYENKDAGNRksIjcBhyRuVjWh_s1tikFuDjQ2Uq2ZNcVXwDWKiJMvkAXAelywV1z_aHurnrZw4HsN-pjVqRzkhGLz0zahKqPDBCqpatpMsoWNdGWRP1fcVIYEYOUVW556BYJEFfE7Sci1AZlVKCZ8eIgVLg5XiQyUAACLRgORirkwtkF_o2EMI6nyrjdmAxGEI05z6AWllFYxvTgUK5g-6ttI60ovMPoRniMzZStKAK9z',
      badgeColor: 'bg-red-600',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Jenkins',
      role: 'Dog Mom',
      text: '"AnimalHeart\'s clinic is the only place I trust with my senior lab. They are so gentle and thorough. The shop is also incredible!"',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBadkcc40C5H3qBhEWbgJtpHMXk9w7QynSOJ2eYCgtE4OJr01FGLC_4oqfvQb2I4h9_ms9df5NzC6cgXIfNmDfirvLN7EGLw1AnGuTSm4twY0tiamQysCIH3zUmBDbU0lvbkEc9d0gaG-ZCiQJOxnuVASD1X79RN8oIaPjPAgTo3ABYpzox_s45jip-EGZPocdymIk1bJrOA_CGSI4ak7NYKfxYk4sFbfkQYz7fsaHQyggeWhMLJy53vyKErYXWF-X6fVI63HKN5jxY',
    },
    {
      name: 'Michael Chen',
      role: 'Cat Parent',
      text: '"Their grooming service is phenomenal. My cat usually hates water, but he came home so relaxed and smelling wonderful."',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1Erttjs17CzYmjSjCJuTuJ1poxacv9kHJy4aCKri8Wpn7cxXzJHEdImnKs-XENNqYCi6rfB1UvhdXV6vh57mRwQn_1HP7c5KH6mkWpg8kjfe15bstFgvbpbzP9cRqRnL6sfdOd8XAGsF_T2N3HSh1DKefwT5xnf3539AtuaepunMrG_nCF-WN2JKqalR9wyPkVkmDu60_Khdyu3PQ3rM6VHgPlS8XomdY3CLibIkYhBkFTyz6etfkLzgtQB96VWUs4RGpp3C2E_z9',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Multi-pet Owner',
      text: '"Fast shipping and the quality of their organic treats is second to none. My pets can really tell the difference!"',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABPAfKUM9J9IFW0_bFaqjm8FWBr-6ME2VqW-S2Gzr3qdWgfywFGOsX0xVcHZYxGCdB8D2Os5dKBW6k6WYJoYYAidHXp4WNGXTTiBCkohk6AwC6oNgCmEh7zLLavGDjDtrxMTPe_l30jBeg-7-_Q2pUsZ3N6lE3J7WnKgYlZRmP0mVqciT3MSJAalcz7HkLD2j98hoYrUF8e3PJkgYRTnZcsgmfBxkidjuYOMVjQT98m9BpWnYYKmXJqOT6V3w_r0h13q8rOyhwJ8rh',
    },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 w-full z-50 flex items-center justify-between px-6 lg:px-12 h-20 bg-white shadow-sm border-b border-gray-100">
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
            placeholder="Search for treats, care..."
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

      <main className="overflow-hidden">
        {/* Hero Section */}
        <section
          id="hero"
          data-observe
          className={`relative pt-20 pb-16 lg:pt-32 lg:pb-20 px-6 lg:px-12 max-w-7xl mx-auto transition-all duration-1000 ${
            visibleSections.hero
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <span className="inline-block px-6 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
                New Clinic Services Available
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                Compassionate Care for <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">Every Heartbeat</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                From organic treats to emergency clinic visits, we provide premium pet care services tailored to your best friend's unique needs.
              </p>
              <div className="flex flex-wrap gap-6 pt-2">
                <button
                  onClick={() => handleNavigation('/shop')}
                  className="px-8 py-3 bg-red-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-red-200 transition-all active:scale-95"
                >
                  Shop Now
                </button>
                <button
                  onClick={() => handleNavigation('/clinic')}
                  className="px-8 py-3 bg-blue-100 text-blue-700 rounded-xl font-semibold hover:opacity-90 transition-all active:scale-95 border border-blue-200"
                >
                  Book Clinic
                </button>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-red-100 rounded-3xl blur-2xl group-hover:bg-red-200 transition-colors"></div>
              <div className="relative bg-white rounded-3xl p-2 shadow-xl overflow-hidden aspect-square flex items-center justify-center">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGkTP-hd17QC0Y8NhgyxjyAOTknmdRMZjY16q6GAmbSVq_4IpyamgKS5xchgVUJxypSIsstCaMObU63jdMCvH4Q_7lOdPo88GwBIv99L3hG6aPtdQEMGn8FreOGnnjNsH-s_8UgnhaP535xX_CMjI4klCbFF9XBHcKNv11HH_7ME8ckPLSNRf9bzMuPKlPJtN7q_pRiAm43VqT2RUfcdaitHt6-dT4skKlhhCtQHiY0dIJQGQfq_5PRG8ZJlyZO-o1okv-yB_ZlD5s"
                  alt="Happy golden retriever in a bright modern living room"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          data-observe
          className={`py-20 px-6 lg:px-12 max-w-7xl mx-auto transition-all duration-1000 ${
            visibleSections.features
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-3">Tailored Services</h2>
            <p className="text-gray-600 text-lg">Everything your pet needs in one place.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <button
                  key={index}
                  onClick={feature.onClick}
                  className={`group p-8 rounded-3xl shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col items-start gap-6 text-left ${
                    feature.isDark
                      ? 'bg-gradient-to-br from-red-800 to-red-900 text-white'
                      : `bg-white`
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-2xl ${
                      feature.isDark ? 'bg-red-700' : feature.bgColor
                    } flex items-center justify-center`}
                  >
                    <IconComponent className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                    <p
                      className={
                        feature.isDark ? 'text-red-100' : 'text-gray-600'
                      }
                    >
                      {feature.description}
                    </p>
                  </div>
                  <div
                    className={`mt-auto font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform ${feature.linkColor}`}
                  >
                    {feature.link}
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Categories Section */}
        <section
          id="categories"
          data-observe
          className={`py-20 bg-gray-50 px-6 lg:px-12 transition-all duration-1000 ${
            visibleSections.categories
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-16 flex-col md:flex-row gap-6">
              <div>
                <h2 className="text-4xl font-bold">Shop by Category</h2>
                <p className="text-gray-600 text-lg mt-2">
                  Curated collections for your furry family members.
                </p>
              </div>
              <button
                onClick={() => handleNavigation('/shop')}
                className="hidden md:block text-red-600 font-semibold underline underline-offset-4 hover:text-red-700"
              >
                View All Categories
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation('/shop')}
                  className="group cursor-pointer text-left"
                >
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-white mb-4">
                    <img
                      src={category.image}
                      alt={`${category.name} pet products`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
                  </div>
                  <h4 className="text-xl font-bold text-center">{category.name}</h4>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section
          id="products"
          data-observe
          className={`py-20 px-6 lg:px-12 max-w-7xl mx-auto transition-all duration-1000 ${
            visibleSections.products
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-3">Featured Products</h2>
            <div className="h-1 w-24 bg-red-600 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <div
                      className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1 rounded-lg text-xs font-semibold`}
                    >
                      {product.badge}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold group-hover:text-red-600 transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-xl font-bold text-red-600">
                      {product.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-6">{product.description}</p>
                  <button
                    onClick={() => handleNavigation('/shop')}
                    className="w-full py-2 bg-gray-100 text-red-600 rounded-xl font-semibold hover:bg-red-600 hover:text-white transition-all active:scale-95"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section
          id="testimonials"
          data-observe
          className={`py-20 bg-red-50 px-6 lg:px-12 transition-all duration-1000 ${
            visibleSections.testimonials
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">What Pet Parents Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-3xl shadow-sm text-left border border-gray-100"
                >
                  <div className="flex gap-1 text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6">{testimonial.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900">{testimonial.name}</h5>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section
          id="newsletter"
          data-observe
          className={`py-20 px-6 lg:px-12 max-w-7xl mx-auto transition-all duration-1000 ${
            visibleSections.newsletter
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-red-600 to-blue-600 p-16 text-center text-white">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-5xl font-bold">Join the AnimalHeart Pack</h2>
              <p className="text-lg opacity-90">
                Subscribe for pet care tips, exclusive discounts, and heartwarming stories delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 mt-8" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-6 py-3 rounded-xl text-gray-900 border-none focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-red-600 px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform active:scale-95"
                >
                  Subscribe Now
                </button>
              </form>
              <p className="text-sm opacity-70">By subscribing, you agree to our Privacy Policy.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-16 px-6 lg:px-12 bg-gray-900 text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Heart className="text-red-500 w-8 h-8 fill-red-500" />
              <span className="text-2xl font-bold text-white">AnimalHeart</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Compassionate care for every pet. We bridge the gap between quality products and professional medical excellence.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-red-500 transition-colors" rel="noopener noreferrer" target="_blank">
                <span className="text-sm">f</span>
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-red-500 transition-colors" rel="noopener noreferrer" target="_blank">
                <span className="text-sm">𝕏</span>
              </a>
              <a href="mailto:care@animalheart.com" className="text-gray-400 hover:text-red-500 transition-colors">
                <span className="text-sm">✉</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => handleNavigation('/clinic')} className="text-gray-400 hover:text-red-500 transition-colors">
                  Veterinary Clinic
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/clinic')} className="text-gray-400 hover:text-red-500 transition-colors">
                  Grooming Spa
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/clinic')} className="text-gray-400 hover:text-red-500 transition-colors">
                  Pet Daycare
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/clinic')} className="text-gray-400 hover:text-red-500 transition-colors">
                  Training Classes
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => handleNavigation('/shop')} className="text-gray-400 hover:text-red-500 transition-colors">
                  Pet Shop
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/clinic')} className="text-gray-400 hover:text-red-500 transition-colors">
                  Book Appointment
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/')} className="text-gray-400 hover:text-red-500 transition-colors">
                  Track Order
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/')} className="text-gray-400 hover:text-red-500 transition-colors">
                  Newsletter
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6">Contact & Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <span>📍</span> 123 Paws Avenue, PetCity
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <span>📞</span> (555) PET-CARE
              </li>
              <li>
                <button onClick={() => handleNavigation('/')} className="text-gray-400 hover:text-red-500 transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/')} className="text-gray-400 hover:text-red-500 transition-colors">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500">
            © 2024 AnimalHeart. Compassionate care for every pet.
          </p>
          <div className="flex gap-6 items-center">
            <img
              alt="PayPal"
              className="h-4 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuADxhlcXxT0USd4_znCz5qmi02rxdMRIfbfrLIycMbw1OlS9Fj51mQ5QWy5HfiEAduLnMOoXYHG0QEAjMyAQvhtYRvunXhQRcxc23LOaf11OLV2n_JIg1ezVuX21mMaJg-pfHnCqh3Kpp3MTFsVCSfDjjH4bIqVsnt_0mGiykZBT1xWZe1v0zkvK-o1idN9aDgvMYnYEIuw9PQZfhxnKiqvdATV-xXrGCNnsT8Uu024219LF2lusGM96KsYxjfR_Grl53n7Z4jlG8Lc"
            />
            <img
              alt="Visa"
              className="h-3 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeZyGeNcdQ1qfYQfjOh4j6j_G6YmXNJmTroR31JtaqsXIAC1ANiuaI2tiZ7Y9xkuwNHGo7GqZcGD6q7udZcrz5c5C_ymaeXa66rggQ7DdEjGjI8ebGse_ba7Tv9cXG_Mp90Lh0IIAyXmlchbuS7y0D49csZBPlLc7TvxugbD36VBIB4BQc-TbRWIrm4Ih6_EHcJhFaeAqBZw7baM-j4nvpmA-E0X2WW7et43DhQJfkvHQ3h6pfDSV-4FkchIZcjLoIrutV1IlXHKHt"
            />
            <img
              alt="Mastercard"
              className="h-6 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDKrNfSwjn3l3Prwykqui-TihVG16hX-ZiQ2wFoavdUI_TmVrUoKSyPTErIdckG2_yrw2SXoepuQjZ62TaOIQLofJlPoN-lo5xluJUv8ga_DxqczbGSDXwER5q_2xTnUtO7GE6NNtHAPKl9-pnHr5XHtN2ehOYGf2btR11XGfYdZiXj8h5VMWTo-CfkFi7yeUjdnghItcTMd1lI5j3AwAT98S0pF-oDrrvT_XjldM2mYWBv5aZhbia8o6F6OQZAlgiEL4H0J_uyItO"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
