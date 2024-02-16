import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import './index.css';

import Layout from './layouts/Layout';

// Main Pages
import Events from './routes/Events';
import Sponsors from './routes/Sponsors';
import About from './routes/About';
import Root from './routes/Root';
import Privacy from './routes/Privacy';
import Terms from './routes/Terms';

//Event Pages
import OWeek from './routes/eventPages/OWeek';
import RiserGame from './routes/eventPages/RiserGame';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Root />} />
      <Route path="about" element={<About />} />
      <Route path="events" element={<Events />} />
      <Route path="sponsor" element={<Sponsors />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="terms" element={<Terms />} />
      <Route path="O-Week" element={<RiserGame />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
