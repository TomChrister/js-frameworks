import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { About } from '../../routes/About.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Layout} from '../layout/Index.jsx';
import './index.css'
import App from './App.jsx'
import { Profile } from '../../routes/Profile.jsx';
import { SpecificProfile } from '../../routes/specificProfile.jsx';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <App />
            },
            {
                path: 'about',
                element: <About />,
                children: [
                    {
                        path: 'info',
                        element: <h2>This is about</h2>
                    },
                ],
            },
            {
                path: 'profile',
                element: <Profile />,
                children: [
                    {
                        path: ':name',
                        element: <SpecificProfile />,
                    }
                ]
            }
        ],
    },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
