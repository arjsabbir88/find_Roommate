import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal';

export const TopRatedRoommate = () => {

    const listings = [
        { label: "Roommate", img: "https://i.ibb.co/0RwwCRh5/pexels-pixabay-265004.jpg" },
        { label: "Coliving", img: "https://i.ibb.co/m5mTYFxF/pexels-medhat-ayad-122846-439227.jpg" },
        { label: "PG", img: "https://i.ibb.co/BHvcNW85/pexels-pixabay-462205.jpg" },
        { label: "Flatmate", img: "https://i.ibb.co/ymyFWKcG/pexels-sebastians-731082.jpg" },
        { label: "Room", img: "https://i.ibb.co/chwGKdWb/pexels-itsterrymag-2635038.jpg" },
        { label: "Entire House", img: "https://i.ibb.co/sddRzh01/pexels-expect-best-79873-323780.jpg" },
    ];
    return (
        <div className=" bg-gray-100 flex items-center rounded-2xl">
            <div className=" grid grid-cols-1 md:grid-cols-2 justify-around items-center w-full p-4">
                <Slide>
                    <h1 className="text-2xl font-bold text-[#50E3C2] mb-8 text-center">
                        Explore The Latest <br /> <span className="text-white bg-[#50E3C2] px-2 py-1 rounded mt-2">Room<span className='text-red-500'>Sync</span></span> Listings
                    </h1>
                </Slide>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                    <Fade direction="up" delay={200} cascade damping={0.1} triggerOnce>

                        {listings.map((listing, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src={listing.img} alt={listing.label} className="w-full h-40 object-cover" />
                                <div className="p-4">
                                    <p className="text-gray-600 font-semibold">{listing.label}</p>
                                </div>
                            </div>
                        ))}
                    </Fade>
                </div>
            </div>
        </div>
    )
}
