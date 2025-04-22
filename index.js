// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});


// *************************My codes****************************

// 1. must provide your own proj,not the example URL.   Done
// 2. /api/whoami   --->
// 2-1. JSON obj  likes {ipaddress: your ip}
// 2-2. JSON obj  likes {language: your language}
// 2-3. JSON obj  likes {software: your software}

// Question: how to get the ip, language and software?

app.get('/api/whoami', function (req, res) {
  console.log('ip:', req.headers['x-forwarded-for'] || req.connection.remoteAddress);
  console.log('language:',req.headers['accept-language']);
  console.log('software:',req.headers['user-agent']);
  res.json({
    ipaddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  });
})


// *************************My codes****************************

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
