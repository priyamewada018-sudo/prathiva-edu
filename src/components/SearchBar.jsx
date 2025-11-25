import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 relative z-10">
      <div className="flex items-center gap-4">
        <Search className="w-6 h-6 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search colleges, courses, exams, or articles..."
          className="flex-1 outline-none text-lg"
        />
        <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;