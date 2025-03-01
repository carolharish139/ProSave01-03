import React, { useState } from 'react';
import axios from 'axios';

function AdminPanel() {
  const [error, setError] = useState('');

  const deleteUser = async (userId) => {
    const token = localStorage.getItem('token');  // קבלת הטוקן שנשמר לאחר התחברות

    try {
      const response = await axios.delete(`http://localhost:3001/admin/users/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`  // שליחת הטוקן בכותרת
        }
      });
      console.log('User deleted:', response.data);
    } catch (err) {
      setError('There was an error deleting the user');
      console.error(err);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <button onClick={() => deleteUser(1)}>Delete User</button>
    </div>
  );
}

export default AdminPanel;
