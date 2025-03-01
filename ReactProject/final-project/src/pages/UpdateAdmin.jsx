import React, { useState } from 'react';

function UpdateAdmin() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleUpdate = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // תוודא שהסיסמה היא "admin"
    if (password === 'admin') {
      setSuccess('Password updated successfully!');
      localStorage.setItem("user", JSON.stringify({ username: 'admin', password: 'admin' }));
    } else {
      setError('Password must be "admin"');
    }
  };

  return (
    <div className="update-admin">
      <h1>Update Admin Password</h1>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <form onSubmit={handleUpdate}>
        <label>
          New Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateAdmin;
