const fs = require('fs');

export function importKey(keyPath: string, certPath: string) {
  return {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath)
  };
};