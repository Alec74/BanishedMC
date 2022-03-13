// const express = require('express');
// const exphbs = require('express-handlebars');
// const hbs = exphbs.create({});
// const path = require('path');
// const test = require("./discordBot/testing")

// const bcrypt = require('bcrypt');
// const saltRounds = 10;


// const mysql = require('mysql');
// // const express = require('express');
// const session = require('express-session');
// // const path = require('path');

// const connection = mysql.createConnection({
// 	host     : 'localhost',
// 	user     : 'root',
// 	password : 'rock111',
// 	database : 'banished_db'
// });














// // Sets up the Express App
// const app = express();
// const PORT = process.env.PORT || 3001;


// app.use(session({
// 	secret: 'secret',
// 	resave: true,
// 	saveUninitialized: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.post('/auth', function(request, response) {
// 	// Capture the input fields
// 	let username = request.body.username;
// 	let password = request.body.password;
// 	// Ensure the input fields exists and are not empty
// 	if (username && password) {
// 		// Execute SQL query that'll select the account from the database based on the specified username and password
// 		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
// 			// If there is an issue with the query, output the error
// 			if (error) throw error;
// 			// If the account exists
// 			if (results.length > 0) {
// 				// Authenticate the user
// 				request.session.loggedin = true;
// 				request.session.username = username;
// 				// Redirect to home page
// 				response.redirect('/dev');
// 			} else {
// 				response.send('Incorrect Username and/or Password!');
// 			}			
// 			response.end();
// 		});
// 	} else {
// 		response.send('Please enter Username and Password!');
// 		response.end();
// 	}
// });

// app.get('dev', function(request, response) {
// 	// If the user is loggedin
// 	if (request.session.loggedin) {
// 		// Output username
// 		// response.send('Welcome back, ' + request.session.username + '!');
// 	} else {
// 		// Not logged in
// 		response.send('Please login to view this page!');
// 	}
// 	response.end();
// });







// set Handlebars.js as the default template engine.
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');
// // setup the static css/js files for the html to have access to
// app.use(express.static(path.join(__dirname, '/public')));
// // Enable the router
// app.use(require('./controllers/homeRoutes'));

  

// // Starts the server to begin listening
// app.listen(PORT, () => {
//     // test(); // testing bot fetch
//     console.log('Server listening on: http://localhost:' + PORT);
//   });
const test = require("./seeds/getData")

const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
// const go = require('./controllers/api/more');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ });

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(function (req, res, next) {
  res.locals.session = req.session;
  next();
});

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
  test();
});
