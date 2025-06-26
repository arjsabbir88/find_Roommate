import { useEffect, useState } from "react";
import { BrowseListings } from "../../Pages/BrowseListings/BrowseListings";
import NavBar from "../DashboardComponent/NavBar/NavBar";
import StatsCharts from "../DashboardComponent/StartCharts/StartCharts";
import { MyListing } from "../../Pages/My-Listing/MyListing";
import DashboardCard from "../DashboardComponent/DashboardCard";
import { FaUser, FaChartBar, FaMoneyBillWave, FaCreditCard } from "react-icons/fa";


const Dashboard = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("https://roommate-serverside.vercel.app/browse-listings")
      .then((res) => res.json())
      .then((data) => setListings(data));
  }, []);

  return (
    <div>
      <div className="mb-8 hidden md:block">
        <NavBar></NavBar>
      </div>
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
      <div className="my-8">
        <StatsCharts></StatsCharts>
      </div>
      <div>
        <BrowseListings listings={listings}></BrowseListings>
      </div>
      {/* <div>
        <MyListing></MyListing>
      </div> */}
    </div>
  );
};

export default Dashboard;
