import React from 'react'
import { Link } from 'react-router';

export const Card = ({ data }) => {
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
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-base">
                    {title}
                    <div className="badge badge-secondary">{roomType}</div>
                </h2>
                <p>{descriptions}</p>
                <div className="card-actions ">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
                <div className='w-full my-3'>
                    <Link to={`details/${_id}`} className='btn w-full bg-[#50E3C2] hover:bg-[#30C9A2] transition duration-300 ease-in-out hover:text-white'>See Details</Link>
                </div>
            </div>
        </div>
    )
}
