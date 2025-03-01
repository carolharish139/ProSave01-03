const express = require('express');
const cors = require('cors');
const session = require('express-session');
const carRoutes = require('./routes/cars');
const userRoutes = require('./routes/users');
const adminRoutes = require('./routes/adminRoutes'); // אם יש לך קובץ כזה לניהול מנהלים

const app = express();
const port = 3001;

// הגדרת session
app.use(session({
  secret: 'your-secret-key', // מפתח סודי להצפנה של הסשן
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }  // צריך להיות true אם משתמשים ב-https
}));

app.use(cors());
app.use(express.json());

app.use('/cars', carRoutes);
app.use('/users', userRoutes);
app.use('/admin', adminRoutes); // נווט לפקודות מנהל

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
