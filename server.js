const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
    res.send("hi")
})

app.listen(3000, (req, res) => {
    console.log(`server has started on port http://localhost:3000`);
})