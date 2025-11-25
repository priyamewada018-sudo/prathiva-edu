import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';

const Navbar = ({ activePage, setActivePage, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              PrathivaEdu
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" onClick={() => setActivePage('home')} className={`font-semibold transition-colors ${activePage === 'home' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}>
              Home
            </Link>
            <Link to="/colleges" onClick={() => setActivePage('colleges')} className={`font-semibold transition-colors ${activePage === 'colleges' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}>
              Colleges
            </Link>
            <Link to="/exams" onClick={() => setActivePage('exams')} className={`font-semibold transition-colors ${activePage === 'exams' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}>
              Exams
            </Link>
            <Link to="/news" onClick={() => setActivePage('news')} className={`font-semibold transition-colors ${activePage === 'news' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}>
              News
            </Link>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all">
              Login
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-2">
            <Link to="/" onClick={() => { setActivePage('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 font-semibold text-gray-600">Home</Link>
            <Link to="/colleges" onClick={() => { setActivePage('colleges'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 font-semibold text-gray-600">Colleges</Link>
            <Link to="/exams" onClick={() => { setActivePage('exams'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 font-semibold text-gray-600">Exams</Link>
            <Link to="/news" onClick={() => { setActivePage('news'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 font-semibold text-gray-600">News</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;