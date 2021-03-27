# Creating a minimal node/express environment:

Create project folder:

```
mkdir appfolder && cd appfolder
```

Initial npm (to manage javascript packages):

Just accept all defaults for now

```
npm init
```

Install express (to handle web requests):

```
npm install --save express
```

Create some empty files:

```
touch index.html
touch app.js
mkdir public
```

Boilerplate for index.html:

```
<html>
	<head>
		<title>Page Title</title>
	</head>
	<body>
		<h1>We're rolling!</h1>
	</body>
</html>
```

Boilerplate for app.js:

```
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
```

Add starting script to package.json (add to existing scripts entry):

```
"scripts" : {
	"start": "node app.js"
}
```

The above is all you need to get started. Below is an explanation of adding
automatic reloading when you make a change to your code.  This is highly
recommended and will save you tons of time during development. 

Install nodemon to watch for file changes:

```
npm install --save nodemon
```

Alter your start script to use nodemon. Replace the start entry you created earler:

```
    "start": "nodemon app.js -e ejs,js,css,html,jpg,png,scss",
```

The above will watch for changes in your project folder and reload the server
when a file is altered/saved.





