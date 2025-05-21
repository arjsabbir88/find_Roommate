import React from 'react'
import { Link } from 'react-router'

export const NavBar = () => {

    const links = <>
        <ul className='md:flex gap-5'>
            <li>
                <Link to='/' className='btn'>Home</Link>
            </li>
            <li>
                <Link to='/find-roommate' className='btn'>Add to Find Roommate</Link>
            </li>
            <li>
                <Link to='/browse-listings' className='btn'>Browse Listing</Link>
            </li>
            <li>
                <Link to='/my-listing' className='btn'>My Listings</Link>
            </li>
        </ul>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm mt-4">
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
                <Link className="btn">Login</Link>
                <Link className="btn">Signup</Link>
            </div>
        </div>
    )
}
