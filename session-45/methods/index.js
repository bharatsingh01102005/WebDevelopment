const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('HOME');
});

app.get('/cat', (req, res) => {
    res.send('CAT');
});

app.get('/dog', (req, res) => {
    res.send('DOG');
});

// ELSE (always last) 
app.use((req, res) => {
    res.status(404).send('NOT FOUND');
});
// infinite routes banane padh jaayenge??

app.listen(8080, () => {
    console.log("server connected at port 8080");
});
