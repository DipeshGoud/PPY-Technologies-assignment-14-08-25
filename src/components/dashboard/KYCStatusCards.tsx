'use client';

import { useState } from 'react';

const statusesData = {
  Today: {
    Individual: [
      { name: 'KYC Initiated', count: 234, color: '#3b82f6', icon: '🚀' },
      { name: 'Under Process', count: 45, color: '#f97316', icon: '⚙️' },
      { name: 'Registered', count: 350, color: '#06b6d4', icon: '👥' },
      { name: 'Validated', count: 654, color: '#10b981', icon: '✅' },
      { name: 'Hold', count: 269, color: '#06b6d4', icon: '⏸️' },
      { name: 'Docs Pending', count: 100, color: '#ef4444', icon: '📋' },
    ],
    'Non Individual': [
      { name: 'KYC Initiated', count: 180, color: '#3b82f6', icon: '🚀' },
      { name: 'Under Process', count: 32, color: '#f97316', icon: '⚙️' },
      { name: 'Registered', count: 280, color: '#06b6d4', icon: '👥' },
      { name: 'Validated', count: 520, color: '#10b981', icon: '✅' },
      { name: 'Hold', count: 190, color: '#06b6d4', icon: '⏸️' },
      { name: 'Docs Pending', count: 75, color: '#ef4444', icon: '📋' },
    ]
  },
  Yesterday: {
    Individual: [
      { name: 'KYC Initiated', count: 210, color: '#3b82f6', icon: '🚀' },
      { name: 'Under Process', count: 38, color: '#f97316', icon: '⚙️' },
      { name: 'Registered', count: 320, color: '#06b6d4', icon: '👥' },
      { name: 'Validated', count: 600, color: '#10b981', icon: '✅' },
      { name: 'Hold', count: 250, color: '#06b6d4', icon: '⏸️' },
      { name: 'Docs Pending', count: 85, color: '#ef4444', icon: '📋' },
    ],
    'Non Individual': [
      { name: 'KYC Initiated', count: 165, color: '#3b82f6', icon: '🚀' },
      { name: 'Under Process', count: 28, color: '#f97316', icon: '⚙️' },
      { name: 'Registered', count: 260, color: '#06b6d4', icon: '👥' },
      { name: 'Validated', count: 480, color: '#10b981', icon: '✅' },
      { name: 'Hold', count: 170, color: '#06b6d4', icon: '⏸️' },
      { name: 'Docs Pending', count: 65, color: '#ef4444', icon: '📋' },
    ]
  }
};

export default function KYCStatusCards() {
  const [selectedTime, setSelectedTime] = useState('Today');
  const [selectedType, setSelectedType] = useState('Individual');

  const currentStatuses = statusesData[selectedTime as keyof typeof statusesData][selectedType as keyof typeof statusesData.Today];

  return (
    <div className="bg-white p-4 sm:p-6 rounded-3xl shadow">
      {/* Header Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
        <div className="flex space-x-3 sm:space-x-6 bg-gray-200 p-1 rounded-full ">
          <button
            onClick={() => setSelectedTime('Today')}
            className={`text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full transition-colors ${selectedTime === 'Today'
              ? 'text-gray-900 bg-gray-100'
              : 'text-gray-400 hover:text-gray-600'
              }`}
          >
            Today
          </button>
          <button
            onClick={() => setSelectedTime('Yesterday')}
            className={`text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full transition-colors ${selectedTime === 'Yesterday'
              ? 'text-gray-900 bg-gray-100'
              : 'text-gray-400 hover:text-gray-600'
              }`}
          >
            Yesterday
          </button>
        </div>
        <div className="flex space-x-3 sm:space-x-6 bg-gray-300 p-1 rounded-full">
          <button
            onClick={() => setSelectedType('Individual')}
            className={`text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full transition-colors ${selectedType === 'Individual'
              ? 'text-gray-900 bg-gray-100'
              : 'text-gray-400 hover:text-gray-600'
              }`}
          >
            Individual
          </button>
          <button
            onClick={() => setSelectedType('Non Individual')}
            className={`text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full transition-colors ${selectedType === 'Non Individual'
              ? 'text-gray-900 bg-gray-100'
              : 'text-gray-400 hover:text-gray-600'
              }`}
          >
            Non Individual
          </button>
        </div>
      </div>

      {/* Status Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 ">
        {currentStatuses.map((status) => (
          <div key={status.name} className="text-center">
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3"
              style={{ backgroundColor: `${status.color}20` }}
            >
              <span className="text-lg sm:text-2xl">{status.icon}</span>
            </div>
            <p className="text-xs text-gray-500 mb-1 sm:mb-2 leading-tight">{status.name}</p>
            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">{status.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}