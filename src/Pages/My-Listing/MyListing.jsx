import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Loading } from "../../Component/Loading/Loading";
import { MyListingRow } from "./MyListingRow";
import { useNavigate } from "react-router-dom";

export const MyListing = () => {
  // const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);
  const [myListings, setMyListing] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // if (!user?.email) {
    //   navigate("/auth/login");
    //   return;
    // }

    fetch(`https://roommate-serverside.vercel.app/my-listing?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyListing(data);
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error("Data is not fetched");
        setIsLoading(false);
      });
  }, [user?.email]);

  if (loading || isLoading) {
    return <Loading />;
  }

  return (
    <div className="overflow-x-auto my-6">
      <h1 className="text-center text-2xl font-bold my-6 text-[#F2C94C]">
        My Roommate Listings
      </h1>

      {myListings.length === 0 ? (
        <p className="text-center text-gray-500">No listings found.</p>
      ) : (
        <table className="table text-lg">
          <thead>
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>LifeStyle</th>
              <th>Availability</th>
              <th>RoomType</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myListings.map((listing) => (
              <MyListingRow key={listing._id} listing={listing} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
