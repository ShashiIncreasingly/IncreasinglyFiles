const express = require('express');
const morgan = require('morgan');
const path = require('path');

//initialize express.
const app = express();

// Initialize variables.
const port = 3000; // process.env.PORT || 3000;

// Configure morgan module to log all requests.
app.use(morgan('dev'));

// Set the front-end folder to serve public assets.
app.use(express.static('JavaScriptSPA'))

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + './index.html'));
});

// Start the server.
app.listen(port);
console.log('Listening on port ' + port + '...');