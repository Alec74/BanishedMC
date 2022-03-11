const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');
const test = require("./discordBot/testing")

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// set Handlebars.js as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// setup the static css/js files for the html to have access to
app.use(express.static(path.join(__dirname, '/public')));
// Enable the router
app.use(require('./controllers/homeRoutes'));

  

// Starts the server to begin listening
app.listen(PORT, () => {
    // test(); // testing bot fetch
    console.log('Server listening on: http://localhost:' + PORT);
  });