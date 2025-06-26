import { useEffect, useState } from "react";
import { BrowseListings } from "../../Pages/BrowseListings/BrowseListings";
import NavBar from "../DashboardComponent/NavBar/NavBar";
import StatsCharts from "../DashboardComponent/StartCharts/StartCharts";
import { MyListing } from "../../Pages/My-Listing/MyListing";
import CardContainerComponent from "../CardContainerComponent/CardContainerComponent";



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
      <div>
        <CardContainerComponent/>
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
