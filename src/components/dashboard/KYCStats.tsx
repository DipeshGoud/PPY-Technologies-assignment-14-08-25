import { CheckCircleIcon, ClockIcon } from '@heroicons/react/24/solid';

export default function KYCStats() {
  return (
    <div className="bg-white rounded-3xl shadow p-6">
      {/* Total KYCs Header */}
      <div className="mb-6">
        <h2 className="text-sm font-medium text-gray-500 mb-1">Total KYCs</h2>
        <p className="text-3xl font-bold text-gray-900">3,456</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* New KYC */}
        <div className="bg-gray-50 rounded-3xl p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <CheckCircleIcon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">New KYC</p>
              <p className="text-2xl font-bold text-gray-900">3,000</p>
              <p className="text-sm text-green-600 flex items-center">
                <span className="mr-1">▲</span>
                12%
              </p>
            </div>
          </div>
        </div>

        {/* Modified KYC */}
        <div className="bg-gray-50 rounded-3xl p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <ClockIcon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Modified KYC</p>
              <p className="text-2xl font-bold text-gray-900">456</p>
              <div className="flex items-center text-sm text-gray-500 mb-1">
                <span className="mr-2">400 My KRA</span>
                <span>56 Interop</span>
              </div>
              <p className="text-sm text-red-600 flex items-center">
                <span className="mr-1">▼</span>
                10%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}