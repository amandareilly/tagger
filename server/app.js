const express = require('express');
const app = express();


// Root URL
app.get('/', (req, res) => {
    res.status(200).send('ok');
})


module.exports = app;