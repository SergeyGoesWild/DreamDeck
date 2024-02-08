import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Errorpage from "../errorpage/Errorpage";
import App from "../../App";
import Homepage from "../../Homepage.jsx"
import Root from "../root/Root.jsx";
import Contact from "../Contact/Contact.jsx";
import About from "../About/About.jsx";

function Routerpage(){
    const router = createBrowserRouter([
        {
            path:"/",
            element: <Root/>,
            errorElement: <Errorpage/>,
            children: [
                {
                    path:"",
                    element: <Homepage/>
                },
                {
                    path:"/contact",
                    element: <Contact/>
                },
                {
                    path:"/about",
                    element: <About/>
                },
            ]
        },
        {
            path:"/pokemondeck",
            element: <App/>
        }
    ]);

    return (
        <RouterProvider router={router}/>
    );
};

export default Routerpage;