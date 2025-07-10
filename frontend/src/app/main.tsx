import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';

import { allPageLinksArray } from '../shared/config/pageLinks.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <></>,
    children: [
      ...allPageLinksArray
    ]
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
