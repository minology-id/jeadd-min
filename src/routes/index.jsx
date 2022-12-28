import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from '@pages/Dashboard';

import { routes } from './routes';

const RouteProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        {routes.map((i, k) => (
          <Route key={k} path={i.to} element={<i.element />} />
        ))}
      </Route>
    </Routes>
  );
};

export default RouteProvider;
