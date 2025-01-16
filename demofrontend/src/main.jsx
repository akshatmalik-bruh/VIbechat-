// filepath: /c:/Users/BIT/Frontendforweb/demofrontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use react-dom/client for React 18+
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import LoginPage from './components/LoginPage';
import Layout from './components/Layout';
import Main from './components/Main';
import AboutUser from './components/AboutUser';
import Users from './components/users';
import Form2 from './components/Form2';
import { AuthProvider } from './context/authcontext';
const routes = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />,
        


    },{
        path: '/login',
        element: <Form2 />,
    },{
        path: '/Main',
        element: <Layout />,
        children: [
            {
                  path:"",
                  element:<Main /> 
            },
        {
            path: 'AboutUser',
            element: <AboutUser />,
        },{
            path : 'Users',
            element : <Users />
        }
    ]
    }
   
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <AuthProvider>
        <RouterProvider router={routes} />
        </AuthProvider>
    </React.StrictMode>
);
