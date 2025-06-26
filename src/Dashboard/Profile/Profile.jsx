import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import StatsCharts from "../DashboardComponent/StartCharts/StartCharts";


const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-full max-w-full mx-auto rounded-xl overflow-hidden shadow-lg">
      {/* Banner */}
      <div className="h-40 bg-gradient-to-r from-[#50E3C2] to-[#33b4a0] relative">
        <img
          src={user?.photoURL}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2 bottom-[-48px] shadow-md"
        />
      </div>

      {/* Profile Info */}
      <div className="pt-16 pb-8 text-center bg-white">
        <h2 className="text-2xl font-semibold text-gray-800">{user?.displayName || "User Name"}</h2>
        <p className="text-gray-500">{user?.email}</p>
      </div>
      <div className="my-10">
        <StatsCharts></StatsCharts>
      </div>
    </div>
  );
};

export default Profile;
