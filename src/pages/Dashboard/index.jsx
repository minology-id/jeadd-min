import React from 'react';
import { Outlet } from 'react-router-dom';

import Layout from '@minology/layout';

const Dashboard = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default Dashboard;
