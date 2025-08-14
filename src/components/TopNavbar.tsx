'use client';

import { MagnifyingGlassIcon, BellIcon } from '@heroicons/react/24/outline';


export default function TopNavbar() {



  return (
    <div className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Left side - Just Dashboard */}
          <div className="flex items-center min-w-0 flex-1">
            <h1 className="text-lg sm:text-xl font-semibold text-gray-900 ml-12 lg:ml-0">Dashboard</h1>
          </div>

          {/* Right side - Search, Notifications, Profile */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Search - Hidden on mobile */}
            <div className="relative hidden sm:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon
                  className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="text"
                className="block w-full pl-8 sm:pl-10 pr-3 py-1.5 sm:py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-xs sm:text-sm"
                placeholder="Search..."
              />
            </div>

            {/* Search icon for mobile */}
            <button
              type="button"
              className="sm:hidden p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="sr-only">Search</span>
              <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
            </button>

            {/* Notifications */}
            <button
              type="button"
              className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
            </button>

            {/* Profile */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-xs sm:text-sm font-medium text-gray-700">MK</span>
              </div>
              <div className="text-right hidden sm:block">
                <div className="text-xs sm:text-sm font-medium text-gray-900">Madhu Kumar</div>
                <div className="text-xs text-gray-500">
                  {new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}