import React from 'react'
import { NavBar } from '../Component/NavBar/NavBar'
import { Outlet } from 'react-router'
import { Footer } from '../Component/Footer/Footer'

export const Root = () => {
    return (
        <>
            <div className='w-11/12 mx-auto'>
                <NavBar></NavBar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </>
    )
}
