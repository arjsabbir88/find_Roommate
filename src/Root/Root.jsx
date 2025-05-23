import React, { useContext } from 'react'
import { NavBar } from '../Component/NavBar/NavBar'
import { Outlet, useNavigation } from 'react-router'
import { Footer } from '../Component/Footer/Footer'
import { AuthContext } from '../Provider/AuthProvider'

export const Root = () => {

    // const { user } = useContext(AuthContext);

    // const navigation = useNavigation();

    // if (user)

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
