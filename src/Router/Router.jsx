import { createBrowserRouter } from "react-router";
import { Root } from "../Root/Root";
import { Error } from "../ErrorPage/Error";
import { Home } from "../Pages/Home";
import { FindRoommate } from "../Pages/FindRoommate/FindRoommate";
import { BrowseListings } from "../Pages/BrowseListings/BrowseListings";
import { MyListing } from "../Pages/My-Listing/MyListing";
import { Details } from "../Pages/Details/Details";


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
                Component: BrowseListings
            },
            {
                path: '/my-listing',
                Component: MyListing
            },
            {
                path: '/details/:id',
                Component: Details,
                loader: ({ params }) => fetch(`http://localhost:3000/roommates-listing/${params.id}`)
            }
        ]
    }
])