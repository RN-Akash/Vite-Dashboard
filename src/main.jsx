import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Layout from './component/Layout.jsx';

import Dashboard from './Dashboard.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

const AppComponent = Layout(Dashboard);
const AboutComponent = Layout(About);
const ContactComponent = Layout(Contact)

const router = createBrowserRouter(
  [
    { path: '/', element: <AppComponent /> },
    { path: '/about', element: <AboutComponent /> },
    { path: '/contact', element: <ContactComponent /> },
  ],
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);