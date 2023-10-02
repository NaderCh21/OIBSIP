// UserTable.js

import React from 'react';

const UserTable = ({ users, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th> {/* Add a new column for the delete button */}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            <td>{user._id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <button onClick={() => onDelete(user._id)}>Delete</button> {/* Delete button */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
