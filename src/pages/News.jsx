import React from 'react';
import { latestNews } from '../data/news';
import { ChevronRight } from 'lucide-react';

const News = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-3xl p-12">
        <h1 className="text-4xl font-bold mb-4">Latest Education News</h1>
        <p className="text-xl text-white/90">Stay updated with admission alerts, exam dates & results</p>
      </div>

      <div className="space-y-6">
        {latestNews.map((news, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer">
            <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
              {news.category}
            </span>
            <h3 className="font-bold text-2xl mt-4 mb-3 hover:text-purple-600 transition-colors">
              {news.title}
            </h3>
            <p className="text-gray-600 mb-4">
              Stay informed about the latest developments in {news.category.toLowerCase()} education. 
              Get complete details about registration dates, eligibility criteria, and important updates.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 text-sm">{news.time}</span>
              <button className="text-purple-600 font-semibold flex items-center">
                Read More <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;