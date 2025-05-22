import React from 'react'
import { Link } from 'react-router';

export const Rows = ({ data }) => {
    // console.log(data)

    const {
        _id,
        title,
        location,
        roomType,
        lifeStyle,
        descriptions,
        contact,
        availability,
        email,
        name,
        image
    } = data;
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
                <Link to={`details/${_id}`} className="btn bg-[#50E3C2] hover:bg-[#30C9A2] transition duration-300 ease-in-out hover:text-white">Details</Link>
            </th>
        </tr>
    )
}
