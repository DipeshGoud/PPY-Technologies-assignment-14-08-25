'use client';

import { useState } from 'react';

const chartData = {
  Solicited: {
    Individual: { total: 3456, rings: [200, 280, 180, 90] },
    'Non Individual': { total: 2890, rings: [180, 250, 160, 80] }
  },
  Unsolicited: {
    Individual: { total: 2100, rings: [120, 180, 100, 60] },
    'Non Individual': { total: 1750, rings: [100, 150, 90, 50] }
  }
};

export default function SolicitedChart() {
  const [selectedStatus, setSelectedStatus] = useState('Solicited');
  const [selectedType, setSelectedType] = useState('Individual');

  const currentData = chartData[selectedStatus as keyof typeof chartData][selectedType as keyof typeof chartData.Solicited];

  return (
    <div className="bg-white p-4 sm:p-6 rounded-3xl shadow">
      {/* Solicited/Unsolicited Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
        <div className="flex space-x-4 sm:space-x-6">
          <button
            onClick={() => setSelectedStatus('Solicited')}
            className={`text-xs sm:text-sm font-medium pb-1 transition-colors ${
              selectedStatus === 'Solicited'
                ? 'text-gray-900 border-b-2 border-gray-900'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Solicited
          </button>
          <button
            onClick={() => setSelectedStatus('Unsolicited')}
            className={`text-xs sm:text-sm font-medium pb-1 transition-colors ${
              selectedStatus === 'Unsolicited'
                ? 'text-gray-900 border-b-2 border-gray-900'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Unsolicited
          </button>
        </div>
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

      {/* Chart and Legend Layout */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8 space-y-6 lg:space-y-0">
        {/* Chart */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative flex items-center justify-center w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
            {/* Background circles */}
            <svg className="absolute w-full h-full" viewBox="0 0 280 280">
              {/* Outermost ring - light gray background */}
              <circle
                cx="140"
                cy="140"
                r="130"
                fill="none"
                stroke="#f3f4f6"
                strokeWidth="16"
              />
              <circle
                cx="140"
                cy="140"
                r="110"
                fill="none"
                stroke="#f3f4f6"
                strokeWidth="16"
              />
              <circle
                cx="140"
                cy="140"
                r="90"
                fill="none"
                stroke="#f3f4f6"
                strokeWidth="16"
              />
              <circle
                cx="140"
                cy="140"
                r="70"
                fill="none"
                stroke="#f3f4f6"
                strokeWidth="16"
              />

              {/* Outermost ring - teal */}
              <circle
                cx="140"
                cy="140"
                r="130"
                fill="none"
                stroke="#14b8a6"
                strokeWidth="16"
                strokeDasharray={`${currentData.rings[0]} 616`}
                strokeDashoffset="0"
                transform="rotate(-90 140 140)"
                strokeLinecap="round"
                className="transition-all duration-500"
              />

              {/* Second ring - blue */}
              <circle
                cx="140"
                cy="140"
                r="110"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="16"
                strokeDasharray={`${currentData.rings[1]} 691`}
                strokeDashoffset="0"
                transform="rotate(-90 140 140)"
                strokeLinecap="round"
                className="transition-all duration-500"
              />

              {/* Third ring - cyan */}
              <circle
                cx="140"
                cy="140"
                r="90"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="16"
                strokeDasharray={`${currentData.rings[2]} 565`}
                strokeDashoffset="0"
                transform="rotate(-90 140 140)"
                strokeLinecap="round"
                className="transition-all duration-500"
              />

              {/* Innermost ring - red */}
              <circle
                cx="140"
                cy="140"
                r="70"
                fill="none"
                stroke="#ef4444"
                strokeWidth="16"
                strokeDasharray={`${currentData.rings[3]} 440`}
                strokeDashoffset="0"
                transform="rotate(-90 140 140)"
                strokeLinecap="round"
                className="transition-all duration-500"
              />
            </svg>
            
            {/* Center Text */}
            <div className="text-center z-10">
              <p className="text-xs sm:text-sm text-gray-500 mb-1">Total</p>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">{currentData.total.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex-1 space-y-3 sm:space-y-4">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-3 bg-teal-500" />
            <span className="text-xs sm:text-sm text-gray-700">No Of PANs Solicited</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-3 bg-blue-600" />
            <span className="text-xs sm:text-sm text-gray-700">Received</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-3 bg-cyan-500" />
            <span className="text-xs sm:text-sm text-gray-700">Consumed</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-3 bg-red-500" />
            <span className="text-xs sm:text-sm text-gray-700">Pending</span>
          </div>
        </div>
      </div>
    </div>
  );
}