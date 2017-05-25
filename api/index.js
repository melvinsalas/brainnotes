const express = require('express'),
      port = 3000;

let app = express();

app.get(
    '/',
    (req, res) => {
        res.send('Hello World');
    });

app.get(
    '/notes',
    (req, res) => {
        res.json({
            "title" : 'Hello World'
        });
    });

app.listen(port, () => {
    console.log(`Express listening on port ${port}`);
    });