import React from 'react'
import { useLoaderData } from 'react-router'

export const Details = () => {
    const dataForDetails = useLoaderData();

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
    } = dataForDetails;
    return (
        <>
            <div
                className="hero my-6"
                style={{
                    backgroundImage:
                        `url(${image})`,
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="text-center">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <h1 className="mb-5 text-5xl font-bold">Welcome to RoomSync</h1>
                        <p className="mb-5">
                            Suggests harmony and connection between roommates.
                        </p>
                        <button className="btn bg-[#50E3C2] hover:bg-[#30C9A2] transition duration-300 ease-in-out hover:text-white">Get Started</button>
                    </div>
                </div>
            </div>

            <div className='my-6 rounded-2xl max-w-7xl mx-auto'>
                <div>
                    <h1 className='text-2xl font-bold text-center my-6'>See Your Home Details</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <img className='rounded-2xl' src={image} alt="" />
                    <div className='grid grid-cols-2 gap-4'>
                        <img className='rounded-2xl' src={image} alt="" />
                        <img className='rounded-2xl' src={image} alt="" />
                        <img className='rounded-2xl' src={image} alt="" />
                        <img className='rounded-2xl' src={image} alt="" />
                    </div>
                </div>
            </div>

            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                    <h1 className='text-2xl font-bold'>New Listing</h1>

                    <div className="card card-dash bg-base-200 my-6">
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-base-200 my-15 rounded-xl'>
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}
