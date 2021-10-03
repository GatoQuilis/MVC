const express = require ('express');
const app = express ();

const path = require('path');

app.listen (3000, () => {
    console.log('Servidor funcionando http://localhost:3000');
});

app.get ('/', (req, res) => {
    res.sendFile (path.join (__dirname, './views/home.html'));
});