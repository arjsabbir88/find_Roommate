import React, { useContext } from 'react'
import { Link } from 'react-router'
import { AuthContext } from '../../Provider/AuthProvider'
import { toast, ToastContainer } from 'react-toastify';
import { Loading } from '../Loading/Loading';
import { Tooltip } from 'react-tooltip';
import './style.css'
import { ThemeToggle } from '../../Theme/Theme';


export const NavBar = () => {

    const { user, logOut, loading } = useContext(AuthContext);


    const handleLogOut = () => {
        console.log('clicked');
        logOut()
            .then(() => {
                toast.success('Account LogOUt Successfylly');
                console.log('logout successfylly')
            }).catch((error) => {
                toast.error('Something was worng try again letter');
            })
    }

    const links = <>
        <ToastContainer />
        <ul className='md:flex gap-5'>
            <li>
                <Link to='/' className='btn bg-[#50E3C2] hover:bg-[#30C9A2] transition duration-300 ease-in-out hover:text-white'>Home</Link>
            </li>
            <li>
                <Link to='/find-roommate' className='btn bg-[#50E3C2] hover:bg-[#30C9A2] transition duration-300 ease-in-out hover:text-white'>Add to Find Roommate</Link>
            </li>
            <li>
                <Link to='/browse-listings' className='btn bg-[#50E3C2] hover:bg-[#30C9A2] transition duration-300 ease-in-out hover:text-white'>Browse Listing</Link>
            </li>
            <li>
                <Link to='/my-listing' className='btn bg-[#50E3C2] hover:bg-[#30C9A2] transition duration-300 ease-in-out hover:text-white'>My Listings</Link>
            </li>
        </ul>
    </>


    if (loading) {
        return <Loading />
    }

    return (
        <div className="sticky top-0  navbar bg-base-100 mt-4 shadow-2x/30 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                {
                    links
                }
            </div>
            <div className="navbar-end gap-3">

                <ThemeToggle></ThemeToggle>

                {
                    user ? (
                        <div className="avatar avatar-online mx-3 example-container">
                            <div className="w-10 rounded-full hover:cursor-pointer" data-tooltip-id="my-tooltip-styles" data-tooltip-content={user.displayName}>
                                <img src={`${user.photoURL ? user.photoURL : "https://cdn-icons-png.flaticon.com/128/1177/1177568.png"}`} title={user.displayName} />
                            </div>
                            <Tooltip id="my-tooltip-styles" className="example" />
                        </div>
                    ) : ('')
                }
                {
                    user ? (<Link to='/auth/login' className="btn hidden bg-[#50E3C2] hover:bg-[#30C9A2] transition duration-300 ease-in-out hover:text-white">LogIn</Link>) : (<Link to='/auth/login' className="btn bg-[#50E3C2] hover:bg-[#30C9A2] transition duration-300 ease-in-out hover:text-white">LogIn</Link>)
                }
                {
                    user ? (<button onClick={handleLogOut} className="btn bg-[#50E3C2] hover:bg-[#30C9A2] transition duration-300 ease-in-out hover:text-white">LogOut</button>) : (<Link to='/auth/register' className="btn bg-[#50E3C2] hover:bg-[#30C9A2] transition duration-300 ease-in-out hover:text-white">Regiester</Link>)
                }
            </div>
        </div>
    )
}
