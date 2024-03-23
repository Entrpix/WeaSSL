# Examples
WeaSSL Examples

## HTTPS Library
```js
const weassl = require('weassl');
const https = require('https');

const serverOptions = weassl.setup('path/to/key.pem', 'path/to/cert.pem');

const requestHandler = (req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World!');
    };
};

const httpsServer = https.createServer(serverOptions, requestHandler);

httpsServer.listen(443, () => {
    console.log('Server Running');
});
```

## ExpressJS
```js
const express = require('express');
const weassl = require('weassl');
const https = require('https');

const serverOptions = weassl.setup('path/to/key.pem', 'path/to/cert.pem');
const app = express();

app.use((req, res) => {
    if (req.url === '/') {
        res.send('Hello, World!');
    };
});

const httpsServer = https.createServer(serverOptions, app);

httpsServer.listen(443, () => {
    console.log('Server Running');
});
```