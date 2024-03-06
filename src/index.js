import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App';
import FourOhFour from './components/404';
import Loading from './components/Loading';
import Home from './components/Home';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

const router = createBrowserRouter([
    {
        path: "/*",
        element: <App />,
        children: [
            {
                path: "*",
                element: <FourOhFour />,
            },
            {
                path: "/*",
                element: <Home />,
            },
            {
                path: "resume",
                element: <Resume />,
            },
            {
                path: "portfolio",
                element: <Portfolio />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ],
    }
]);

ReactDOM.createRoot(document.getElementById("app")).render(
    <RouterProvider
        router={router}
        fallbackElement={<Loading />}
    />
);
