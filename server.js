'use strict';

const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res)=> {
    res.status(200).send('Proof of life!');
})

app.listen(PORT, ()=>{ console.log('Server up on port 3000')});