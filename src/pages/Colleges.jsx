import React, { useState } from 'react';
import { MapPin, Star, CheckCircle2, ChevronRight } from 'lucide-react';
import collegesData from '../data/colleges';

const Colleges = () => {
  const [selectedStream, setSelectedStream] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const streams = ['All', 'Engineering', 'Medical', 'Management', 'Design', 'Law'];
  const locations = ['All', 'Delhi', 'Mumbai', 'Bangalore', 'Chennai'];

  const filteredColleges = collegesData.filter(college => {
    const streamMatch = selectedStream === 'all' || college.courses.includes(selectedStream);
    const locationMatch = selectedLocation === 'all' || college.location === selectedLocation;
    return streamMatch && locationMatch;
  });

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-12">
        <h1 className="text-4xl font-bold mb-4">Find Your Dream College</h1>
        <p className="text-xl mb-6 text-white/90">Search from 10,000+ colleges across India</p>
        
        <div className="grid md:grid-cols-3 gap-4">
          <select 
            className="bg-white text-gray-800 px-4 py-3 rounded-xl outline-none"
            onChange={(e) => setSelectedStream(e.target.value)}
          >
            {streams.map((stream, idx) => (
              <option key={idx} value={stream.toLowerCase()}>{stream}</option>
            ))}
          </select>
          <select 
            className="bg-white text-gray-800 px-4 py-3 rounded-xl outline-none"
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            {locations.map((location, idx) => (
              <option key={idx} value={location.toLowerCase()}>{location}</option>
            ))}
          </select>
          <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all">
            Search Colleges
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredColleges.map((college, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-bold text-xl mb-1">{college.name}</h3>
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  {college.location}
                </div>
              </div>
              <div className="flex items-center bg-amber-100 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500 mr-1" />
                <span className="font-semibold text-amber-700">{college.rating}</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">{college.courses}</p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm">
                <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                <span>Approved by AICTE</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                <span>Excellent Placements</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t">
              <div className="text-sm">
                <div className="text-gray-500">Annual Fees</div>
                <div className="font-bold text-purple-600">{college.fees}</div>
              </div>
              <button className="text-purple-600 font-semibold flex items-center">
                View Details <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colleges;