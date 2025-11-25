import React from 'react';
import { exams } from '../data/exams';
import { Calendar } from 'lucide-react';

const Exams = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-3xl p-12">
        <h1 className="text-4xl font-bold mb-4">Competitive Exams Guide</h1>
        <p className="text-xl text-white/90">Complete information about 500+ entrance exams</p>
      </div>

      <div className="grid gap-6">
        {exams.map((exam, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                    {exam.category}
                  </span>
                  <span className="text-gray-500">{exam.applicants} Applicants</span>
                </div>
                <h3 className="font-bold text-2xl mb-4">{exam.name}</h3>
                <div className="grid md:grid-cols-4 gap-6 mb-6">
                  <div>
                    <div className="text-gray-500 text-sm mb-1">Exam Date</div>
                    <div className="font-semibold">{exam.date}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm mb-1">Application</div>
                    <div className="font-semibold">Online</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm mb-1">Mode</div>
                    <div className="font-semibold">Computer Based</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm mb-1">Duration</div>
                    <div className="font-semibold">3 Hours</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold">
                    View Details
                  </button>
                  <button className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-all">
                    Predict Rank
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exams;