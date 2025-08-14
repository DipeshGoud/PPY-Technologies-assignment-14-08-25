'use client';

import { useState } from 'react';
import KYCStats from '@/components/dashboard/KYCStats';
import KYCBarChart from '@/components/dashboard/KYCBarChart';
import KYCStatusCards from '@/components/dashboard/KYCStatusCards';
import CategoriesSection from '@/components/dashboard/CategoriesSection';
import SolicitedChart from '@/components/dashboard/SolicitedChart';
import PANDataStats from '@/components/dashboard/PANDataStats';
import TimeRangeTabs from '@/components/dashboard/TimeRangeTabs';

import DatePicker from '@/components/dashboard/DatePicker';

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState('Today');

  return (
    <div className="p-3 sm:p-4 lg:p-6 bg-gray-50 min-h-screen">
      {/* Header with Breadcrumb, Tabs and Date Picker */}
      <div className="mb-4 sm:mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          {/* Left side - Breadcrumb */}
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 sm:space-x-4">
              <li>
                <div>
                  <span className="text-sm font-medium text-gray-500 hover:text-gray-700">
                    Axis MF
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 sm:ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                    Home
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 sm:ml-4 text-sm font-medium text-gray-900">
                    Dashboard
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Right side - Tabs and Date Picker */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <TimeRangeTabs selected={timeRange} onSelect={setTimeRange} />
            <DatePicker />
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
        {/* Left Column - Takes 2 columns (wider) on desktop */}
        <div className="xl:col-span-2 space-y-4 sm:space-y-6">
          {/* Total KYCs Section */}
          <KYCStats />

          {/* Bar Chart */}
          <KYCBarChart />

          {/* KYC Status Cards */}
          <KYCStatusCards />
        </div>

        {/* Right Column - Takes 1 column (narrower) on desktop */}
        <div className="xl:col-span-1 space-y-4 sm:space-y-6">
          {/* Categories Section */}
          <CategoriesSection />

          {/* Solicited & Unsolicited Section */}
          <SolicitedChart />

          {/* PAN & Data Stats */}
          <PANDataStats />
        </div>
      </div>
    </div>
  );
}
