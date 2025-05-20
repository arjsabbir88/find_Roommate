import { createBrowserRouter } from "react-router";
import { Root } from "../Root/Root";
import { Error } from "../ErrorPage/Error";
import { Home } from "../Pages/Home";
import { FindRoommate } from "../Pages/FindRoommate/FindRoommate";
import { BrowseListings } from "../Pages/BrowseListings/BrowseListings";
import { MyListing } from "../Pages/My-Listing/MyListing";


export const Router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                Component: Home
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
            }
        ]
    }
])