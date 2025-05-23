import React from 'react'
import { Link } from 'react-router';

export const MyListingRow = ({ listing }) => {

    const {
        _id,
        title,
        location,
        roomType,
        lifeStyle,
        availability,
        name,
        image
    } = listing;
    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={image}
                                alt="image" />
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
                <Link to={`/my-listing/update-Listing-data/${_id}`} className="btn bg-[#50E3C2] hover:bg-[#30C9A2] transition 
                duration-300 ease-in-out hover:text-white px-4 py-2 text-sm whitespace-nowrap">
                    Update</Link>
            </th>
            <th>
                <button className="btn bg-[#50E3C2] hover:bg-[#30C9A2] transition 
                duration-300 ease-in-out hover:text-white px-4 py-2 text-sm whitespace-nowrap">
                    Delete</button>
            </th>
        </tr>
    )
}
