const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

// app.use(cookieParser());
app.use(cookieParser('thisismysecret'));

app.get('/', (req, res) => {
    console.log(req.cookies);
   // res.send(req.cookies); // all easy cookies
    res.send(req.signedCookies); // all signed cookies

});

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grapes', { signed: true });
    res.send('signed cookie sent');
});

// app.get('/setcookie', (req, res) => {
//     res.cookie('mode', 'dark');
//     res.cookie('location', 'delhi');
//     res.cookie('username', 'john_doe');
//     res.send('server sent you cookies');
// });

// app.get('/getcookie', (req, res) => {
//     let { mode, location, username } = req.cookies;
//     res.send(`hy my name is: ${username}, i stay in: ${location}, and my fav theme is: ${mode}`);
// });

app.listen(8080, () => {
    console.log('server is running on port 8080');
});