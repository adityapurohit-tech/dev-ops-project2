import React, { useState, useEffect } from 'react';

const AdminPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch all users from the backend
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3004/admin/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Admin: User List</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Password (Hashed)</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
