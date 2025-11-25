import React from 'react';

const Card = ({ title, description, location, rating, fees, onClick }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer group" onClick={onClick}>
      <h3 className="font-bold text-xl mb-1">{title}</h3>
      <div className="flex items-center text-gray-600 text-sm mb-2">
        <span className="mr-1">📍</span>
        {location}
      </div>
      <div className="flex items-center bg-amber-100 px-3 py-1 rounded-full mb-2">
        <span className="text-amber-500 mr-1">⭐</span>
        <span className="font-semibold text-amber-700">{rating}</span>
      </div>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="flex items-center justify-between pt-4 border-t">
        <div className="text-sm">
          <div className="text-gray-500">Annual Fees</div>
          <div className="font-bold text-purple-600">{fees}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;