import { createBrowserRouter, Navigate } from "react-router";
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
import { Loading } from "../Component/Loading/Loading";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { UpdateListingData } from "../Pages/My-Listing/UpdateListingData";
import DashboardLayout from "../Dashboard/Dashboard-Layout/DashboardLayout";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import Profile from "../Dashboard/Profile/Profile";

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () =>
          fetch("https://roommate-serverside.vercel.app/roommates-listing"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/find-roommate",
        element: (
          <ProtectedRoute>
            <FindRoommate></FindRoommate>
          </ProtectedRoute>
        ),
        // Component: FindRoommate
      },
      {
        path: "/browse-listings",
        Component: BrowseListings,
        loader: () =>
          fetch("https://roommate-serverside.vercel.app/browse-listings"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/browse-listings/details/:id",
        // Component: BrowsListingDetails,
        element: (
          <ProtectedRoute>
            <BrowsListingDetails></BrowsListingDetails>
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://roommate-serverside.vercel.app/browse-listings/details/${params.id}`
          ),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/my-listing",
        Component: MyListing,
        // loader:
      },
      {
        path: "/details/:id",
        // Component: Details,
        element: (
          <ProtectedRoute>
            <Details></Details>
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://roommate-serverside.vercel.app/roommates-listing/${params.id}`
          ),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/auth/login",
        Component: LogIn,
      },
      {
        path: "/auth/register",
        Component: Register,

        // Component: Register
      },
      {
        path: "/*",
        element: <Navigate to="/error" replace />,
      },
      {
        path: "/error",
        Component: Error,
      },
      {
        path: "/my-listing/update-Listing-data/:id",
        Component: UpdateListingData,
        loader: ({ params }) =>
          fetch(
            `https://roommate-serverside.vercel.app/my-listing/${params.id}`
          ),
        hydrateFallbackElement: <Loading />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      {
        path: "/dashboard/profile",
        element: (
          <ProtectedRoute>
            <Profile></Profile>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
