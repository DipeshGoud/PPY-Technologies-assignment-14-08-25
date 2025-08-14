export default function PANDataStats() {
  return (
    <div className="bg-white p-6 rounded-3xl shadow space-y-6">
      {/* No. Of PANs Solicited */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900 mb-1">No. Of PANs Solicited</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>400 <span className="text-xs">KFin KRA</span></span>
              <span>250 <span className="text-xs">With Image</span></span>
              <span>256 <span className="text-xs">Without Image</span></span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold text-gray-900">956</p>
        </div>
      </div>

      {/* Data Received */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900 mb-1">Data Received</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>300 <span className="text-xs">KFin KRA</span></span>
              <span>100 <span className="text-xs">With Image</span></span>
              <span>20 <span className="text-xs">Without Image</span></span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold text-gray-900">320</p>
        </div>
      </div>
    </div>
  );
}