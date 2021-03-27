const express = require('express');
const app = express();
const path = require('path');

// handle static files like stylesheets and images
app.use(express.static('public'));

// Set up root path, sending index.html
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
})

// Launch Server
app.listen(3000, function () {
	console.log('Server listening on port 3000!')
});
