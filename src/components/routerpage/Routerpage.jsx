import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Errorpage from "../errorpage/Errorpage";
import App from "../../App";

function Routerpage(){
    const router = createBrowserRouter([
        {
            path:"/",
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