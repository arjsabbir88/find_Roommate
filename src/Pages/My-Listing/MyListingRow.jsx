import React, { useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const MyListingRow = ({ listing }) => {
  const [myListing, setMyListing] = useState(listing);


  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#50E3C2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://roommate-serverside.vercel.app/my-listing/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Listing deleted",
                showConfirmButton: false,
                timer: 1500,
              });
              // optionally refresh data:
              // refetchListings();
            //   setMyListing(null)
            } else {
              Swal.fire("Failed", data.message, "error");
            }
          })
          .catch((err) => {
            Swal.fire("Error", "Failed to delete", "error");
            console.error(err);
          });
      }
    });
  };

  const {
    _id,
    title,
    location,
    roomType,
    lifeStyle,
    availability,
    name,
    image,
  } = myListing;
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={image} alt="image" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{location}</div>
          </div>
        </div>
      </td>
      <td>
        {title}
        <br />
        <span className="badge badge-ghost badge-sm">{_id}</span>
      </td>
      <td>{lifeStyle}</td>
      <td>{availability}</td>
      <td>{roomType}</td>
      <th>
        <Link
          to={`/my-listing/update-Listing-data/${_id}`}
          className="btn bg-[#50E3C2] hover:bg-[#30C9A2] transition 
                duration-300 ease-in-out hover:text-white px-4 py-2 text-sm whitespace-nowrap"
        >
          Update
        </Link>
      </th>
      <th>
        <button
          onClick={()=>handleDelete(_id)}
          className="btn bg-[#50E3C2] hover:bg-[#30C9A2] transition 
                duration-300 ease-in-out hover:text-white px-4 py-2 text-sm whitespace-nowrap"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};
