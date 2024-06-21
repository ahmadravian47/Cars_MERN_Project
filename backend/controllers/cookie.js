const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// Enable cookie parsing middleware
app.use(cookieParser());

// Route to set a cookie
app.get('/set', (req, res) => {
   res.cookie('ahmad123', 'token123', {
    path: "/",
    expires: new Date(Date.now() + 1000 * 3600),
    httpOnly: true,
    sameSite: "lax",
   });
  res.send('Cookie has been set');
});


app.listen(4000, () => console.log('Server listening on port 3000'));
