const fs = require('fs');

export function setup(keyPath: string, certPath: string) {
  return {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath)
  };
};