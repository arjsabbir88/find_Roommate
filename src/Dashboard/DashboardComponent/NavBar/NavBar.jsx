import { useContext } from "react";
import { FaCog, FaBell, FaUserCircle, FaStar } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router";

const NavBar = () => {


    const {user} = useContext(AuthContext)
    console.log(user)

  return (
    <div className=" px-6 py-4 flex justify-between items-center">
      
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 space-x-1">
        <Link to='/' className="text-black">Home</Link>
        <span className="text-gray-400">/</span>
        <span className="text-[#06a081] font-medium">Dashboard</span>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3 flex-wrap">
        
        {/* Search Input */}
        <input
          type="text"
          placeholder="Type here..."
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#50E3C2] text-sm"
        />

        {/* Online Builder Button */}
        <button className="px-4 py-2 border border-[#50E3C2] text-[#50E3C2] hover:bg-[#50E3C2] hover:text-white transition rounded-lg text-sm font-medium">
          Online Builder
        </button>

        {/* Star Count */}
        <div className="flex items-center border border-gray-200 rounded-md px-2 py-1 text-sm">
          <FaStar className="text-gray-500 mr-1" />
          11,157
        </div>

        {/* Icons */}
        <FaCog className="text-gray-600 text-lg cursor-pointer hover:text-[#50E3C2]" />
        <FaBell className="text-gray-600 text-lg cursor-pointer hover:text-[#50E3C2]" />

        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover cursor-pointer"
          />
        ) : (
          <FaUserCircle className="text-gray-600 text-2xl cursor-pointer hover:text-[#50E3C2]" />
        )}
        
      </div>
    </div>
  );
};

export default NavBar;
