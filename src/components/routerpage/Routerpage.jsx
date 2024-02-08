import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../errorpage/ErrorPage";
import App from "../../App";

function Routerpage(){
    const router = createBrowserRouter([
        {
            path:"/",
            element: <Homepage/>,
            errorElement: <ErrorPage/>
        },
        {
            path:"/app",
            element: <App/>,
            errorElement: <ErrorPage/>
        }
    ]);
    return (
        <RouterProvider router={router}/>
    );
};

export default Routerpage;