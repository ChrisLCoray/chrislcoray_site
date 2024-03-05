import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import Loading from './components/Loading';
import Home from './components/Home';
import Contact from './components/Contact';
import Resume from './components/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
    {
        path: "/*",
        element: <App />,
        children: [
            {
                path: "*",
                element: <Home />,
            },
            {
                path: "resume",
                element: <Resume />,
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
