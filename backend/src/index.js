//const variables for application with express
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.send(`Hello ${req.query.name}`);
})

app.listen(3000);
