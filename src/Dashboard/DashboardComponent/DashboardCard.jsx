import React from 'react'

const DashboardCard = ({ title, value, icon, change, changeText, isPositive }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-xs flex justify-between items-start outline-gray-400">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h2 className="text-2xl font-bold text-gray-800">{value}</h2>
        <p className={`text-sm mt-1 ${isPositive ? "text-green-500" : "text-red-500"}`}>
          {isPositive ? "+" : "-"}{change}% <span className="text-gray-400">than {changeText}</span>
        </p>
      </div>
      <div className="bg-gray-900 text-white p-2 rounded-lg">
        {icon}
      </div>
    </div>
  )
}

export default DashboardCard
