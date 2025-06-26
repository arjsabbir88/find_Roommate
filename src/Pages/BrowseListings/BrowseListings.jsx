import React from 'react'
import { useLoaderData } from 'react-router'
import { Rows } from './Rows';

export const BrowseListings = ({listings: propListings}) => {
    
        const routeData = useLoaderData();

    const allData = propListings || routeData || [];
    return (
        <>
            <div className="overflow-x-auto my-6">
                <div>
                    <h1 className='text-center text-2xl font-bold my-6 text-[#F2C94C]'>See All The Browse</h1>
                </div>
                <table className="table text-lg">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Title</th>
                            <th>LifeStyle</th>
                            <th>Availability</th>
                            <th>RoomType</th>
                            <th>See Details</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allData.map(data => <Rows key={data._id} data={data}></Rows>)
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}
