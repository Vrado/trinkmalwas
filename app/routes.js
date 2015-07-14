var Drink = require('./models/drink');

function getDrinks(res){
	Drink.find(function(err, drinks) {


            // Fehlerhandling, falls es beim Abholen der Daten einen Fehler gibt. Alles nach res.send(err) wird verworfen.
			if (err)
				res.send(err)

			res.json(drinks); // Hole alle "Drinks"-Einträge im JSON-Format
		});
};

module.exports = function(app) {

	// #########API##########
	// Hol alle Drinks-Elemente
	app.get('/api/drinks', function(req, res) {

		// Mittels Mongoose die Elemente holen
		getDrinks(res);
	});


    // Einen Drink-Eintrag erstellen und alle erstellten Drinks wieder anzeigen
	app.post('/api/drinks', function(req, res) {

		// Erstellung eines Drink-Eintrages
        Drink.create({
            text : req.body.text,
            menge: req.body.menge,
			//zeit: req.Date.now,
			comment : req.body.comment,
            done : false
        }, function(err, drink) {
            if (err)
                res.send(err);

            // Alle Drinks-Elemente anzeigen
            getDrinks(res);
        });

	});

	// Drink-Element löschen
	app.delete('/api/drinks/:drink_id', function(req, res) {
		Drink.remove({
			_id : req.params.drink_id
		}, function(err, drink) {
			if (err)
				res.send(err);

			getDrinks(res);
		});
	});


	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // Die View laden. AngularJS kümmert sich um Page-Änderungen im Front-End

	});
};
