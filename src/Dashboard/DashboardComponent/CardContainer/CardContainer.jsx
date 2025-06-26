import React from 'react'
import { FaUser, FaChartBar, FaMoneyBillWave, FaCreditCard } from "react-icons/fa";
import DashboardCard from '../DashboardCard'

const CardContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <DashboardCard
        title="Today's Money"
        value="$53k"
        icon={<FaCreditCard size={20} />}
        change={55}
        changeText="last week"
        isPositive={true}
      />
      <DashboardCard
        title="Today's Users"
        value="2300"
        icon={<FaUser size={20} />}
        change={3}
        changeText="last month"
        isPositive={true}
      />
      <DashboardCard
        title="Ads Views"
        value="3,462"
        icon={<FaChartBar size={20} />}
        change={2}
        changeText="yesterday"
        isPositive={false}
      />
      <DashboardCard
        title="Sales"
        value="$103,430"
        icon={<FaMoneyBillWave size={20} />}
        change={5}
        changeText="yesterday"
        isPositive={true}
      />
    </div>
  )
}

export default CardContainer
