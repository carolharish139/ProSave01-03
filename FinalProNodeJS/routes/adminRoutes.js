const express = require('express');
const db = require('../dbSingleton');
const router = express.Router();

// פונקציה לבדוק אם המשתמש מחובר ומנהל
const isAdmin = (req, res, next) => {
  if (req.session.user && req.session.user.role === 'admin') {
    
    return next();
  }
  return res.status(403).json({ message: 'Access denied, you are not an admin' });
};

// מחיקת משתמש
router.delete('/users/:id', isAdmin, (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM users WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error deleting user:', err);
      return res.status(500).json({ success: false, message: 'Error deleting user' });
    }
    return res.status(200).json({ success: true, message: 'User deleted successfully' });
  });
});

module.exports = router;
