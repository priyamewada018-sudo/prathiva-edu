import React from 'react';
import { Search, BookOpen, GraduationCap, Award, TrendingUp, Users, FileText, ChevronRight, Calendar, MapPin, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';
import { topColleges, exams, latestNews, tools, categories } from '../data'; // Assuming data is exported from a data file

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative px-8 py-20 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">
              Discover Your Perfect Education Path
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Explore 10,000+ colleges, 500+ exams, and unlimited opportunities across India
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105">
                Find Colleges
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-all">
                Explore Exams
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <SearchBar />

      {/* Categories */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Explore by Stream</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map(cat => (
            <Card key={cat.id} category={cat} />
          ))}
        </div>
      </div>

      {/* Quick Tools */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Admission Tools</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, idx) => (
            <div key={idx} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer">
              <div className={`w-14 h-14 bg-gradient-to-br ${tool.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <tool.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">{tool.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{tool.desc}</p>
              <div className="flex items-center text-purple-600 font-semibold">
                Try Now <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Colleges */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Top Colleges in India</h2>
          <button className="text-purple-600 font-semibold flex items-center hover:gap-2 transition-all">
            View All <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topColleges.map((college, idx) => (
            <Card key={idx} college={college} />
          ))}
        </div>
      </div>

      {/* Upcoming Exams */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8">
        <h2 className="text-3xl font-bold mb-6">Upcoming Exams</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exams.map((exam, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {exam.category}
                </span>
                <Calendar className="w-5 h-5 text-gray-400" />
              </div>
              <h3 className="font-bold text-lg mb-2">{exam.name}</h3>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">{exam.date}</span>
                <span className="text-purple-600 font-semibold">{exam.applicants}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Latest News */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Latest News & Updates</h2>
        <div className="space-y-4">
          {latestNews.map((news, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all cursor-pointer group">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
                    {news.category}
                  </span>
                  <h3 className="font-semibold text-lg mt-3 mb-2 group-hover:text-purple-600 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{news.time}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;