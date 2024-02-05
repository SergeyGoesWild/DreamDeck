import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../root/Root";
import Home from "../home/Home";
import ErrorPage from "../errorpage/ErrorPage";
import App from "../../App";

function RouterPage(){
    const router = createBrowserRouter([
        {
            path:"/",
            element: <Home/>,
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

export default RouterPage;