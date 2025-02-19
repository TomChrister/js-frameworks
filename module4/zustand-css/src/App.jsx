import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '../components/Layout/index.jsx';
import { Products } from '../Routes/Products.jsx';
import { SingleProduct } from '../Routes/SingleProduct';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <h1>Home</h1>,
            },
            {
                path: '/products',
                element: <Products />,
            },
            {
                path: 'product/:id',
                element: <SingleProduct />,
            },
        ],
    },
]);

function App() {
  return (
      <>
          <RouterProvider router={router} />
      </>
  );
}

export default App
