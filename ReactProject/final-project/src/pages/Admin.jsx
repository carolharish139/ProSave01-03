import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Admin() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ username: '', password: '', role: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    // קריאה לקבלת רשימת המשתמשים
    axios.get('http://localhost:3001/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users!', error);
      });
  }, []);

  const handleAddUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/users/register', newUser);
      if (response.data.success) {
        setUsers([...users, response.data.user]);
        setNewUser({ username: '', password: '', role: '' });
      } else {
        setError('There was an error adding the user.');
      }
    } catch (err) {
      setError('There was an error adding the user.');
      console.error(err);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:3001/users/delete/${userId}`);
      setUsers(users.filter(user => user.id !== userId));
    } catch (err) {
      console.error('Error deleting user!', err);
    }
  };

  return (
    <div className="admin">
      <h1>Admin Dashboard</h1>

      <h2>Add New User</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleAddUser}>
        <label>
          Username:
          <input
            type="text"
            value={newUser.username}
            onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={newUser.password}
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            required
          />
        </label>
        <label>
          Role:
          <select
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            required
          >
            <option value="">Select Role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <button type="submit">Add User</button>
      </form>

      <h2>Existing Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username} - {user.role}
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;
