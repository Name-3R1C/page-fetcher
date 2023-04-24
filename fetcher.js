const url = process.argv[2];
const localPath = process.argv[3];
const request = require('request');
const fs = require('fs');

request(url, (error, response, body) => {
  fs.writeFile(localPath, body, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
  });
});