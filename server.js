'use strict';
//import 'bootstrap';
import 'md5';
import 'sha256';
import 'keccak256';
import 'ripemd160';
import 'sha512';
import 'blowfish';
import 'aes';
import 'rsa';

const express = require('express');
const path = require('path');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);