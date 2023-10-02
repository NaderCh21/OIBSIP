// AdminPage.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUser } from '../actions/userActions'; // Import the new action
import UserTable from '../components/UserTable';

const AdminPage = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.adminPageReducer);

  // Function to refresh user list
  const refreshUsers = () => {
    dispatch(fetchUsers());
  };

  const handleDeleteUser = (userId) => {
    // Call the delete user action
    dispatch(deleteUser(userId));
  };

  useEffect(() => {
    // Load user data initially
    refreshUsers();
  }, []);

  return (
    <div className="admin-page-container">
      <h2>User Management</h2>
      <button onClick={refreshUsers} disabled={loading} className="refresh-button">
        {loading ? 'Refreshing...' : 'Refresh Users'}
      </button>
      <div className="user-table">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <UserTable users={users} onDelete={handleDeleteUser} /> // Pass onDelete function to UserTable
        )}
      </div>
    </div>
  );
};

export default AdminPage;
