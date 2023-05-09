import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from '@material-tailwind/react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './pages/Home/Home';
import AddCoffe from './pages/AddCoffee/AddCoffe';
import UpdateCoffee from './pages/UpdateCoffee/UpdateCoffee';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://beans-and-blends-server-heynazrul.vercel.app/coffee'),
      },
      {
        path: 'addCoffee',
        element: <AddCoffe></AddCoffe>,
      },
      {
        path: 'updateCoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`https://beans-and-blends-server-heynazrul.vercel.app/coffee/${params.id}`),
      },
    ],
  },

  {
    path: 'updateCoffee',
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
