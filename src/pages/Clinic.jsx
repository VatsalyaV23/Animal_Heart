import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart, User, Menu, X, Star, Search, ChevronLeft, ChevronRight } from 'lucide-react';

const Clinic = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [consultationType, setConsultationType] = useState('online');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinks = [
    { label: 'Shop', href: '/shop' },
    { label: 'Clinic', href: '/clinic' },
    { label: 'Grooming', href: '/clinic' },
    { label: 'About Us', href: '/' },
  ];

  const doctors = [
    {
      id: 1,
      name: 'Dr. Jonathan Aris',
      specialty: 'Senior Surgeon • 15y Exp',
      specializations: ['Orthopedics', 'Cardiology'],
      rating: 4.9,
      nextAvailable: 'Today, 2:30 PM',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSyme8KPSC7q6iTJkOCEC6Xb6PZAEQ7kQ58S44U0QSBvxloosa3AMe6B64_rzprA0fou6R_MDqNHC6EJeADd8zV94CHgh2U8LpTc0HxjpHmpIeQjMTRsB5I3MWOuD-Mh3I1RprypVos_Xng3qqFIkVczFq3nZv7TN3OdphP5ubNWaxL_gHrl7QYEsf3eqvl_gqtsEd9c-cpxUpavVAm_Gw9DuXQnl1_ICFQprRRuXDT2FvC9gC0eztYaqVrXPCIUUfRgEiakNtP1_L',
    },
    {
      id: 2,
      name: 'Dr. Sarah Jenkins',
      specialty: 'Feline Specialist • 8y Exp',
      specializations: ['Behavior', 'Internal Medicine'],
      rating: 4.8,
      nextAvailable: 'Tomorrow, 10:00 AM',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3Iu9ZGIeC8hGfE4aig_XDj2AivU4gWVWWvcucu8mS-5OSaFCrH8d-4W92kh7cyM0W8EUvdQ00ZLSo0sa14SlmiK-yJ9hsF1B5dddXIy_R6UbgAAxnvsIzt0qmW14G93gVnff7v4fsFfQYmCCvH5rYbxPlwUAAOgt0brrXdW_piNCkvu_tostLf51VvFR37qccMhNuhOppOPiLQtIQQzSkTPlUPUzWqq639jPaUQI90IsW9pNLHE9cOptVbwKutAnnto8PJiXMRGES',
    },
    {
      id: 3,
      name: 'Dr. Michael Chen',
      specialty: 'Exotic Pets • 10y Exp',
      specializations: ['Avian Care', 'Reptiles'],
      rating: 5.0,
      nextAvailable: 'Wed, 4:15 PM',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDf1vbdiWpPi2BgdI0XrEr3tvlTS-cQ5QQpx6Xa6DkYk0S-G7wuUyomskWdKuEoDjos-sKXu0sySdWVpPGpVG926ZjLfZWzjk7Xv-bbvWGBzuqR4IOd0rPzrGg0MEGKS5pObuASrKHcPE3obwhAV6LyMsnxIkS4jUPuCOy1ckh19eiG5ujLM4qGpDhePs2XdrPE4uO01DuYGJkGMHUCHNwQDVOuVbJrLv16vCmOzMcofHSV3npHgdC0n5cZiYKrMxZxjDa68yYC5one',
    },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const openBookingModal = (doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeBookingModal = () => {
    setIsModalOpen(false);
    setSelectedDoctor(null);
    document.body.style.overflow = 'auto';
  };

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
                index === 1
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
            placeholder="Search care..."
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
        {/* Hero & Search Section */}
        <section className="relative mb-16 rounded-3xl overflow-hidden min-h-[400px] flex flex-col justify-center p-12 lg:p-16 bg-gradient-to-r from-white via-white/80 to-transparent">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover"
              alt="Modern veterinary clinic interior with professional lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0DTdg0EM_7Bk8R8W6qUa8RZa7VjXOQXcqFdW9OscY7o6AALzYSAMmMEaIdpKO892rVSMzvBiK_qR8YaYA_iNaha-8FeY_0Jbl_as3Hvb022gbnIB63WU86DCnMO2nDSSkuJ8A43Pb910bDO2uBBd_jmZSBph7vvPcrzHCgNPNcz9Xrmh8YmXuIL9AqZUpO_Bf1lP1TTJ4gkuog2my8rco9ve8FC8_lp3gCDLym7Pivd_32KWL5N6DTDYt4ScqNTfC3osTHBNsAmmL"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6">
              Trusted Pet Healthcare
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-red-600 mb-6">
              Find the perfect specialist for your best friend.
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Book world-class veterinary consultations from the comfort of your home or visit our state-of-the-art clinics.
            </p>

            {/* Search Component */}
            <div className="bg-white/70 backdrop-blur-md p-4 rounded-2xl flex flex-col md:flex-row items-center gap-4 border border-gray-200 shadow-lg">
              <div className="flex-1 w-full flex items-center gap-3 px-4 py-3 bg-white/50 rounded-xl border border-gray-300">
                <Search className="text-red-600 w-5 h-5" />
                <input
                  className="bg-transparent border-none focus:outline-none w-full text-sm"
                  placeholder="Search by name or specialization..."
                  type="text"
                />
              </div>
              <div className="w-full md:w-auto flex items-center gap-3 px-4 py-3 bg-white/50 rounded-xl border border-gray-300">
                <span className="text-emerald-600">📍</span>
                <input
                  className="bg-transparent border-none focus:outline-none w-48 text-sm"
                  placeholder="Location"
                  type="text"
                />
              </div>
              <button className="w-full md:w-auto px-8 py-3 bg-red-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-200 active:scale-95 transition-all">
                Find Doctor
              </button>
            </div>
          </div>
        </section>

        {/* Consultation Toggle & Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">Available Specialists</h2>
            <p className="text-gray-600 mt-2">24 specialists currently active in your area</p>
          </div>

          {/* Consultation Toggle */}
          <div className="flex p-2 bg-gray-100 rounded-full w-fit">
            <button
              onClick={() => setConsultationType('online')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                consultationType === 'online'
                  ? 'bg-white shadow-md text-red-600'
                  : 'text-gray-600'
              }`}
            >
              Online
            </button>
            <button
              onClick={() => setConsultationType('offline')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                consultationType === 'offline'
                  ? 'bg-white shadow-md text-red-600'
                  : 'text-gray-600'
              }`}
            >
              Clinic Visit
            </button>
          </div>
        </div>

        {/* Featured Doctors Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-3xl overflow-hidden flex flex-col group hover:-translate-y-1 transition-all duration-300 shadow-sm border border-gray-100 hover:shadow-md"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={`${doctor.name} veterinarian portrait`}
                  src={doctor.image}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Star className="text-amber-400 w-4 h-4 fill-amber-400" />
                  <span className="font-bold text-sm">{doctor.rating}</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                  <p className="text-emerald-600 font-semibold text-xs uppercase tracking-wider">
                    {doctor.specialty}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {doctor.specializations.map((spec, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-6 border-t border-gray-200 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Next Available</p>
                    <p className="font-semibold text-sm text-gray-900">{doctor.nextAvailable}</p>
                  </div>
                  <button
                    onClick={() => openBookingModal(doctor)}
                    className="px-6 py-2 bg-red-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-red-200 active:scale-95 transition-all text-sm"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeBookingModal}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Escape') closeBookingModal();
            }}
          />
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
            {/* Modal Left: Info */}
            <div className="w-full md:w-2/5 bg-red-600 p-8 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-2">Book Appointment</h2>
                <p className="text-red-100">{selectedDoctor?.name}</p>
              </div>
              <div className="hidden md:block">
                <img
                  className="rounded-2xl opacity-60 mix-blend-overlay"
                  alt="Veterinary scheduling calendar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxoTIGZSRonE3GjP3cFEJRqe2_mBa5m4E-vR6FQ-tOfVZcWIosTfS4YUKPCvhE0l1dokpqC09OJgLb0Lcf1QPhF_4fgYEEOutukL99AgArzLjdEuYsTy5hAiQtJ4YwMd5m5uzwhgC1UUaJwQeH2w6kUIvFAR7zy02Ea0_SI_BpVyymNI1aOC7gIBKm9nrS9GrhK5cOPe_UennH5Anb8iHpIoeHLM7zRMnrAwiOYSv2j1rfupzoJyf-FQ650DbhcjVHrPSeYWOjmG20"
                />
              </div>
              <p className="text-xs opacity-70">A confirmation email will be sent after booking.</p>
            </div>

            {/* Modal Right: Calendar & Slots */}
            <div className="flex-1 p-8 bg-white">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-semibold text-gray-900">October 2024</h4>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center" aria-label="Previous month">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center" aria-label="Next month">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Simple Calendar Simulation */}
              <div className="grid grid-cols-7 gap-2 text-center mb-8">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day) => (
                  <span key={day} className="text-xs uppercase text-gray-500 font-semibold">
                    {day}
                  </span>
                ))}
                {[12, 13, 14, 15, 16, 17, 18].map((date) => (
                  <button
                    key={date}
                    className={`p-2 rounded-lg text-sm font-medium ${
                      date === 14
                        ? 'bg-red-600 text-white font-bold'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {date}
                  </button>
                ))}
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-4">Available Slots</h4>
                <div className="grid grid-cols-3 gap-3">
                  {['09:00 AM', '10:30 AM', '11:45 AM', '02:15 PM', '04:00 PM', '05:30 PM'].map((time, index) => (
                    <button
                      key={time}
                      className={`py-2 rounded-xl font-medium transition-all text-sm ${
                        index === 1
                          ? 'bg-emerald-100 border border-emerald-600 text-emerald-700'
                          : 'border border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={closeBookingModal}
                  className="flex-1 py-3 text-gray-700 font-semibold hover:bg-gray-100 rounded-xl transition-all"
                >
                  Cancel
                </button>
                <button className="flex-1 py-3 bg-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-lg hover:shadow-red-200 active:scale-95 transition-all">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full py-12 px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 bg-gray-100 border-t border-gray-300 mt-16">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Heart className="text-red-600 w-6 h-6 fill-red-600" />
            <span className="text-xl font-bold text-red-600">AnimalHeart</span>
          </div>
          <p className="text-gray-600 text-sm max-w-xs">
            © 2024 AnimalHeart. Compassionate care for every pet.
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="font-bold text-gray-900 uppercase tracking-wider text-sm">Services</h4>
          <ul className="space-y-2">
            <li>
              <button onClick={() => handleNavigation('/clinic')} className="text-gray-600 hover:text-red-600 transition-colors text-sm">
                Pet Shop
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation('/clinic')} className="text-gray-600 hover:text-red-600 transition-colors text-sm">
                Veterinary Clinic
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation('/clinic')} className="text-gray-600 hover:text-red-600 transition-colors text-sm">
                Grooming Salon
              </button>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="font-bold text-gray-900 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <button onClick={() => handleNavigation('/clinic')} className="text-gray-600 hover:text-red-600 transition-colors text-sm">
                Book Appointment
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation('/')} className="text-gray-600 hover:text-red-600 transition-colors text-sm">
                Privacy Policy
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation('/')} className="text-gray-600 hover:text-red-600 transition-colors text-sm">
                Newsletter
              </button>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-gray-900 uppercase tracking-wider text-sm">Contact</h4>
          <p className="text-gray-600 text-sm">Email: care@animalheart.com</p>
          <p className="text-gray-600 text-sm">Emergency: (555) 123-PETS</p>
          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com" className="text-gray-600 hover:text-red-600 transition-colors" rel="noopener noreferrer" target="_blank" aria-label="Facebook">
              f
            </a>
            <a href="https://twitter.com" className="text-gray-600 hover:text-red-600 transition-colors" rel="noopener noreferrer" target="_blank" aria-label="Twitter">
              𝕏
            </a>
            <a href="mailto:care@animalheart.com" className="text-gray-600 hover:text-red-600 transition-colors" aria-label="Email">
              ✉
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Clinic;
