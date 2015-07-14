// Initiales Setup der Abhängigkeiten
var express  = require('express');
var app      = express();
var mongoose = require('mongoose'); 					// Mongoose um die Daten schematisch abzulegen
var port  	 = process.env.PORT || 7777; 				// Die Portnummer für die Webseite
var database = require('./config/database'); 			// Datenbank-Konfiguration laden
var morgan   = require('morgan');                       // Logging-Addon für die Konsolenausgabe
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Konfiguration
mongoose.connect(database.url);

app.use(express.static(__dirname + '/public')); 		// Setzen des statischen Ordners
app.use(morgan('dev')); // Logging in die Konsole
app.use(bodyParser.urlencoded({'extended':'true'})); // Kodierung x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride('X-HTTP-Method-Override'));


// Routen
require('./app/routes.js')(app);

// Logging-Anzeige, auf welchem Port die Applikation läuft
app.listen(port);
console.log("Trinkmalwas ist auf dem Port " + port +" gestartet.");
