import React from 'react'
import { NavBar } from '../Component/NavBar/NavBar'
import { Outlet } from 'react-router'
import { Footer } from '../Component/Footer/Footer'

export const Root = () => {
    return (
        <>
            <div>
                <NavBar></NavBar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </>
    )
}
