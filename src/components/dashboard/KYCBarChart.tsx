import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';



const data = [
  {
    name: 'Individual',
    Today: 360,
    Yesterday: 300,
  },
  {
    name: 'Non Individual',
    Today: 300,
    Yesterday: 250,
  },
];

export default function KYCBarChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      {/* Chart Controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex justify-center flex-1">
          <div className="flex space-x-6">
            <div className="flex items-center text-sm text-gray-700">
              <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
              Today
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <div className="w-3 h-3 bg-blue-300 rounded-full mr-2"></div>
              Yesterday
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 text-gray-400 hover:text-gray-600 bg-gray-100 rounded">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600 bg-gray-100 rounded">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={data} 
            margin={{ top: 20, right: 20, left: 0, bottom: 40 }}
            barCategoryGap="20%"
          >
            <CartesianGrid 
              strokeDasharray="none" 
              stroke="#e5e7eb" 
              horizontal={true} 
              vertical={false}
            />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 14, fill: '#6b7280' }}
              dy={10}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
              domain={[0, 400]}
              ticks={[0, 50, 100, 150, 200, 250, 300, 350, 400]}
            />
            <Bar 
              dataKey="Today" 
              fill="#2563eb" 
              radius={[2, 2, 0, 0]}
              maxBarSize={60}
            />
            <Bar 
              dataKey="Yesterday" 
              fill="#bfdbfe" 
              radius={[2, 2, 0, 0]}
              maxBarSize={60}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}