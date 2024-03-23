# WeaSSL
Easy SSL w/ NodeJS

## Install
```sh
npm i weassl
```

## Build
```sh
git clone https://github.com/entrpix/weassl
cd weassl
npm i 
npm run build
```

## Usage
```js
const weassl = require('weassl');
const https = require('https');

const serverOptions = weassl.importKey('path/to/key.pem', 'path/to/cert.pem');

server.listen(443, () => {
  console.log('Server running at https://localhost:443/');
});
```

## Examples
Examples can be found [here](./examples.md)
