const express = require('express');
const app = express();

// add a route handler
app.get('/greeting', (req, res) => {
    res.send({hi: 'there'});
});

const PORT = process.env.PORT || 5000; // default port
app.listen(PORT);

