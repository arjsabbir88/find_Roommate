import { createBrowserRouter } from "react-router";
import { Root } from "../Root/Root";
import { Error } from "../ErrorPage/Error";
import { Home } from "../Pages/Home";
import { FindRoommate } from "../Pages/FindRoommate/FindRoommate";
import { BrowseListings } from "../Pages/BrowseListings/BrowseListings";
import { MyListing } from "../Pages/My-Listing/MyListing";
import { Details } from "../Pages/Details/Details";
import { BrowsListingDetails } from "../Pages/BrowseListings/BrowsListingDetails";
import { LogIn } from "../ValidationSytem/LogIn";
import { Register } from "../ValidationSytem/Register";


export const Router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch("http://localhost:3000/roommates-listing")
            },
            {
                path: '/find-roommate',
                Component: FindRoommate
            },
            {
                path: '/browse-listings',
                Component: BrowseListings,
                loader: () => fetch("http://localhost:3000/browse-listings")
            },
            {
                path: '/browse-listings/details/:id',
                Component: BrowsListingDetails,
                loader: ({ params }) => fetch(`http://localhost:3000/browse-listings/details/${params.id}`)
            },
            {
                path: '/my-listing',
                Component: MyListing
            },
            {
                path: '/details/:id',
                Component: Details,
                loader: ({ params }) => fetch(`http://localhost:3000/roommates-listing/${params.id}`)
            },
            {
                path: '/auth/login',
                Component: LogIn
            },
            {
                path: '/auth/register',
                Component: Register
            }
        ]
    }
])