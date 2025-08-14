'use client';

import { useState } from 'react';



const categoriesData = {
  Individual: {
    RI: { progress1: 85, progress2: 70 },
    NRI: { progress1: 45, progress2: 0 }
  },
  'Non Individual': {
    RI: { progress1: 75, progress2: 60 },
    NRI: { progress1: 35, progress2: 25 }
  }
};

export default function CategoriesSection() {
  const [selectedType, setSelectedType] = useState('Individual');
  
  const currentData = categoriesData[selectedType as keyof typeof categoriesData];

  return (
    <div className="bg-white p-4 sm:p-6 rounded-3xl shadow">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-medium text-gray-900">Categories</h3>
        <div className="flex space-x-1 rounded-full bg-gray-100 p-1">
          <button
            onClick={() => setSelectedType('Individual')}
            className={`rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium transition-colors ${
              selectedType === 'Individual'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Individual
          </button>
          <button
            onClick={() => setSelectedType('Non Individual')}
            className={`rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium transition-colors ${
              selectedType === 'Non Individual'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Non Individual
          </button>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="space-y-6 sm:space-y-8">
        {/* RI */}
        <div>
          <div className="mb-3">
            <span className="text-xs sm:text-sm font-medium text-gray-700">RI</span>
          </div>
          <div className="space-y-2">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${currentData.RI.progress1}%` }}
              />
            </div>
            {currentData.RI.progress2 > 0 && (
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${currentData.RI.progress2}%` }}
                />
              </div>
            )}
          </div>
        </div>

        {/* NRI */}
        <div>
          <div className="mb-3">
            <span className="text-xs sm:text-sm font-medium text-gray-700">NRI</span>
          </div>
          <div className="space-y-2">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${currentData.NRI.progress1}%` }}
              />
            </div>
            {currentData.NRI.progress2 > 0 && (
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${currentData.NRI.progress2}%` }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}