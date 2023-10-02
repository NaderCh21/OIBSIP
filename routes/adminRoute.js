// adminRoutes.js
import React from 'react';
import { Route } from 'react-router-dom';
import AdminPage from '../Admin/AdminPage';

const AdminRoutes = () => {
  return (
    <div>
      <Route path="/admin" element={<AdminPage />} />
    </div>
  );
};

export default AdminRoutes;
