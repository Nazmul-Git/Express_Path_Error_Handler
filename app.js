/*
    Synchronous error handling
*/

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(a);
})

// ===================================

// 404 page not found error handler 
app.use((req, res, next) => {
    next('Requested url was not found.');
})

// specific path error handler
app.use((err, req, res, next) => {
    console.log(err.message);
    if (res.headerSent) {
        next('There was a problem!');
    } else {
        if (err.message) res.status(500).send(err.message);
        else res.status(500).send('There was an error!');
    }
})

app.listen(3000, () => {
    console.log(`Application running on port 3000`);
})
