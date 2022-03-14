const http = require('http');
const fs = require('fs');
const express = require('express');
const axios = require('axios');
const port = process.env.PORT || 8000;
const app = express();
const server = http.createServer(app);

const AUTH_URL = './base.json';
let base;
if (fs.existsSync(AUTH_URL)) {
  auth = require(AUTH_URL);
}
let cek_server = auth.url+"whatsapp/cek_server"; 
server.listen(port, function() {
    console.log('App running on *: ' + port);
  });
// /*Interval*/
setInterval(function() {
  axios
  .get(cek_server, {});
  console.log(cek_server+' = is ok 200');
},1000);