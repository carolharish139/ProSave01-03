const express = require('express');
const db = require('../dbSingleton');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const query = 'SELECT * FROM users WHERE username = ?';
    db.query(query, [username], async (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Error logging in' });
      }


      if (results.length > 0) {
        const user = results[0];
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
          // שומרים את המידע בסשן
          req.session.user = user;
          return res.json({ message: 'Login successful!', user });
        } else {
          return res.status(401).json({ message: 'Invalid username or password' });
        }
      } else {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
    });
  } catch (err) {
    return res.status(500).json({ message: 'Error logging in' });
  }
});

// יציאה (logout)
router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Error logging out' });
    }
    res.json({ message: 'Logout successful!' });
  });
});

module.exports = router;
