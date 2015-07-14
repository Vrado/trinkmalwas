var mongoose = require('mongoose'); // Hiermit geben wir mit, dass Mongoose verwendet/benötigt wird.


module.exports = mongoose.model('Drink', {      // Datenmodell mit 4 Feldern erstellen
	text : {type : String, default: ''},
    menge: {type: Number, default: null},
    zeit: {type: Date, default:Date.now },
	comment: {type: String}
});
