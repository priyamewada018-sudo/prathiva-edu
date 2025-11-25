import React from 'react';
import { GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">PrathivaEdu</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner in higher education journey. Discover, compare, and choose the best colleges and courses.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="hover:text-white cursor-pointer">About Us</div>
              <div className="hover:text-white cursor-pointer">Contact</div>
              <div className="hover:text-white cursor-pointer">Privacy Policy</div>
              <div className="hover:text-white cursor-pointer">Terms of Service</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Popular Streams</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="hover:text-white cursor-pointer">Engineering</div>
              <div className="hover:text-white cursor-pointer">Medical</div>
              <div className="hover:text-white cursor-pointer">Management</div>
              <div className="hover:text-white cursor-pointer">Design</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="hover:text-white cursor-pointer">College Predictor</div>
              <div className="hover:text-white cursor-pointer">Rank Predictor</div>
              <div className="hover:text-white cursor-pointer">Compare Colleges</div>
              <div className="hover:text-white cursor-pointer">Expert Guidance</div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 PrathivaEdu. All rights reserved. Empowering students to make informed education decisions.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;