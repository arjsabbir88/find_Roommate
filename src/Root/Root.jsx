import React, { useContext, useEffect, useState } from 'react'
import { NavBar } from '../Component/NavBar/NavBar'
import { Outlet, useLocation, useNavigation } from 'react-router'
import { Footer } from '../Component/Footer/Footer'
import { AuthContext } from '../Provider/AuthProvider'
import { Loading } from '../Component/Loading/Loading'
import { ToastContainer } from 'react-toastify'

export const Root = () => {

    const location = useLocation();
    const [showFooter, setShowFooter] = useState(true);
    const [showNavBar, setShowNavBar] = useState(true);

    const { state } = useNavigation();

    useEffect(() => {
        if (location.pathname === "/error") {
            setShowFooter(false);
            setShowNavBar(false);
        } else {
            setShowFooter(true);
            setShowNavBar(true);
        }
    }, [location]);

    return (
        <>
            <div className='w-11/12 mx-auto'>

                {
                    showNavBar && <NavBar></NavBar>
                }

                {
                    state === 'loading' ? <Loading /> : <Outlet />
                }
                <ToastContainer></ToastContainer>


                {
                    showFooter && <Footer></Footer>
                }

            </div>
        </>
    )
}
