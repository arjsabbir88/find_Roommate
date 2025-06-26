import React, { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { Footer } from "../../Component/Footer/Footer";
import { IoRadioButtonOn } from "react-icons/io5";
import { MdViewSidebar } from "react-icons/md";

const DashboardLayout = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open bg-[#f5f5f5]">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content mx-0 md:mx-10 lg:mx-20 my-8">
          {/* Page content here */}

          <div className="flex justify-end">
            <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
              <MdViewSidebar size={40} />
            </label>
          </div>
          <div className="max-w-full mx-auto">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-[#ffffff] min-h-[70vh] text-base-content w-80 p-4 my-8 rounded-2xl">
            {/* Sidebar content here */}
            <Link to="/" className="text-center font-bold text-xl py-6">
              Room<span className="text-red-500">Sync</span>
            </Link>
            <hr />
            <div className="mt-3">
              <li>
                <Link to='/dashboard'>
                  <IoRadioButtonOn /> Dashboard
                </Link>
              </li>
              <li>
                <Link to="/my-listing">My Listing</Link>
              </li>
              <li>
                <Link to="/browse-listings">Browse Listing</Link>
              </li>
              <li>
                <Link to="/">Back To Home</Link>
              </li>
            </div>
            <div className="my-5">
              <h1 className="text-gray-500 text-xl text-center">
                Account Pages
              </h1>
              <li>
                <NavLink to="/dashboard/profile">Profile</NavLink>
              </li>
              <div>
                <li>
                  <NavLink>Setting</NavLink>
                </li>
                <li>
                  <NavLink>Notification</NavLink>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
