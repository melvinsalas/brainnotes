
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/notes', (req, res) => {
    res.json({
        "name": "note 1"
    });
});

app.listen(port, () => {
    console.log(`Express listening on port ${port}`);
});