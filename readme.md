# WeaSSL
Easy SSL w/ NodeJS

## Install
```sh
npm i weassl
# or
git clone https://github.com/entrpix/weassl
cd weassl
npm i 
npm run build
```

## Usage
```js
const weassl = require('weassl');

const serverOptions = weassl.importKey('path/to/key.pem', 'path/to/cert.pem');

https.createServer(serverOptions, app).listen(443, () => {
  console.log('Server running at https://localhost:443/');
});
```

```js
// ExpressJS
const { importKey } = require('weassl');
const express = require('express');
const https = require('https');

const serverOptions = importKey('path/to/key.pem', 'path/to/cert.pem');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, secure world!\n');
});

https.createServer(serverOptions, app).listen(443, () => {
  console.log('Server running at https://localhost:443/');
});
```

```js
// Built-In HTTP/S Library
const { importKey } = require('weassl');
const https = require('https');

const serverOptions = importKey('path/to/key.pem', 'path/to/cert.pem');

const server = https.createServer(serverOptions, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, secure world!\n');
});

server.listen(443, () => {
  console.log('Server running at https://localhost:443/');
});
```
