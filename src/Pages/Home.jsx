import React from 'react'
import Slider from '../Component/Slider/Slider'
import { Cards } from '../Component/Cards/Cards'

export const Home = () => {
    return (
        <div>

            <div className='my-6'>
                <Slider></Slider>
            </div>
            <div className='my-6'>
                <Cards></Cards>
            </div>
        </div>
    )
}
