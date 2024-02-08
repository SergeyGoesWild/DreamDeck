import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Errorpage from "../errorpage/Errorpage";
import App from "../../App";
import Homepage from "../../Homepage.jsx"

function Routerpage(){
    const router = createBrowserRouter([
        {
            path:"/home",
            element: <Homepage/>,
            errorElement: <Errorpage/>
        },
        {
            path:"/app",
            element: <App/>,
            errorElement: <Errorpage/>
        }
    ]);
    return (
        <RouterProvider router={router}/>
    );
};

export default Routerpage;