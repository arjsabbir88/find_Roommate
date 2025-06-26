import {
  BarChart, Bar, LineChart, Line,
  XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';

const websiteData = [
  { day: 'Monday', views: 50 },
  { day: 'Tuesday', views: 45 },
  { day: 'Wednesday ', views: 20 },
  { day: 'Thursday ', views: 25 },
  { day: 'Friday', views: 50 },
  { day: 'Saturday', views: 60 },
  { day: 'Sunday', views: 75 },
];

const salesData = [
  { month: 'January', value: 150 },
  { month: 'February', value: 250 },
  { month: 'March', value: 170 },
  { month: 'April', value: 420 },
  { month: 'May', value: 300 },
  { month: 'June', value: 390 },
  { month: 'July', value: 320 },
  { month: 'August', value: 250 },
  { month: 'September', value: 130 },
  { month: 'October', value: 290 },
  { month: 'November', value: 280 },
  { month: 'December', value: 220 },
];

const taskData = [
  { month: 'April', value: 100 },
  { month: 'May', value: 300 },
  { month: 'June', value: 250 },
  { month: 'July', value: 400 },
  { month: 'August', value: 600 },
  { month: 'September', value: 350 },
  { month: 'October', value: 450 },
  { month: 'November', value: 320 },
  { month: 'December', value: 560 },
];

const StatsCharts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-full">
      
      {/* Website Views */}
      <div className="bg-white rounded-xl p-4 shadow">
        <h3 className="text-md font-semibold">Website Views</h3>
        <p className="text-sm text-gray-500">Last Campaign Performance</p>
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={websiteData}>
            <XAxis dataKey="day" />
            <Tooltip />
            <Bar dataKey="views" fill="#4CAF50" />
          </BarChart>
        </ResponsiveContainer>
        <p className="text-xs text-gray-500 mt-2">🕒 campaign sent 2 days ago</p>
      </div>

      {/* Daily Sales */}
      <div className="bg-white rounded-xl p-4 shadow">
        <h3 className="text-md font-semibold">Daily Sales</h3>
        <p className="text-sm text-gray-500">(+15%) increase in today sales.</p>
        <ResponsiveContainer width="100%" height={150}>
          <LineChart data={salesData}>
            <XAxis dataKey="month" />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#4CAF50" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-xs text-gray-500 mt-2">🕒 updated 4 min ago</p>
      </div>

      {/* Completed Tasks */}
      <div className="bg-white rounded-xl p-4 shadow">
        <h3 className="text-md font-semibold">Completed Tasks</h3>
        <p className="text-sm text-gray-500">Last Campaign Performance</p>
        <ResponsiveContainer width="100%" height={150}>
          <LineChart data={taskData}>
            <XAxis dataKey="month" />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#4CAF50" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-xs text-gray-500 mt-2">🕒 just updated</p>
      </div>
    </div>
  );
};

export default StatsCharts;
