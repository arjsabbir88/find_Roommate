import React from 'react'
import Slider from '../Component/Slider/Slider'
import { Card } from '../Component/Card/Card'
import { useLoaderData } from 'react-router'

export const Home = () => {

    const dataFormServer = useLoaderData();
    return (
        <div>

            <div className='my-6'>
                <Slider></Slider>
            </div>
            {/* <div className='my-6'>
                <Card></Card>
            </div> */}

            <div className='my-6'>
                <div className='text-center'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-[#F2C94C]'>Find Your Ideal Roommate</h1>
                    <p className='text-[#5f5d5d]'>Explore our latest roommate listings from different areas in Dhaka. Choose the perfect match based on your lifestyle and preferences.</p>
                </div>
                <div className='my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        dataFormServer.map(data => <Card key={data._id} data={data}></Card>)
                    }
                </div>
            </div>
        </div>
    )
}
