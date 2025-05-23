import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import { toast } from 'react-toastify';
import { Loading } from '../../Component/Loading/Loading';
import { MyListingRow } from './MyListingRow';

export const MyListing = () => {

    const { user, loading } = useContext(AuthContext);
    const [myListings, setMyListing] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!user?.email) return;
        // collecting data form the api via email
        fetch(`http://localhost:3000/my-listing?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setMyListing(data);
                setIsLoading(false);
            }).catch(error => {
                toast.error('Data is Not fetched');
                setIsLoading(false);
            })
    }, [user?.email]);

    // set loader
    if (loading || isLoading) {
        return <Loading></Loading>
    }



    return (

        <div className="overflow-x-auto my-6">
            <div>
                <h1 className='text-center text-2xl font-bold my-6 text-[#F2C94C]'>My Roommate Listings</h1>
            </div>

            {
                myListings.length === 0 ? (
                    <p className="text-center text-gray-500">No listings found.</p>
                ) : (
                    <table className="table text-lg ">
                        {/* head */}
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


                            {
                                myListings.map(listing => <MyListingRow key={listing._id} listing={listing}></MyListingRow>)
                            }


                        </tbody>
                    </table>
                )
            }

        </div>













        // <div className="my-10">
        //     <h2 className="text-2xl font-bold mb-4 text-center">My Roommate Listings</h2>
        //     {myListings.length === 0 ? (
        //         <p className="text-center text-gray-500">No listings found.</p>
        //     ) : (
        //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        //             {myListings.map((listing) => (
        //                 <div key={listing._id} className="border p-4 rounded-lg shadow-md">
        //                     <img src={listing.image} alt={listing.title} className="w-full h-40 object-cover rounded mb-3" />
        //                     <h3 className="text-lg font-semibold">{listing.title}</h3>
        //                     <p><strong>Location:</strong> {listing.location}</p>
        //                     <p><strong>Rent:</strong> {listing.rent}</p>
        //                     <p><strong>Type:</strong> {listing.roomType}</p>
        //                     <p><strong>Email:</strong> {listing.email}</p>
        //                     <p><strong>Description:</strong> {listing.descriptions}</p>
        //                 </div>
        //             ))}
        //         </div>
        //     )}
        // </div>
    );
}
