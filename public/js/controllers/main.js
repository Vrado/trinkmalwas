angular.module('drinkController', [])// Der Hauptcontroller für die Applikation. Wir verwenden nur einen.


    // Den Drink-Service in den Controller einbinden
	.controller('mainController', ['$scope','$http','Drinks', function($scope, $http, Drinks) {
		$scope.formData = {};
		$scope.loading = true;

		// ####### GET #########
		// Wenn man auf die Startseite kommt, sollen alle Drinks angezeigt werden.

		Drinks.get()
			.success(function(data) {
				$scope.drinks = data;
				$scope.loading = false;
			});

		// ###### CREATE #########

        // Wenn ein Drink erstellt wird, soll der Text an die API übermittelt werden.
		$scope.createDrink = function() {

			// Fehlerhandling für die Inhalte der Inputs
			if ($scope.formData.text != undefined) {
				$scope.loading = true; //Prüfung auf Richtigkeit
                //TODO Fehlerhandling für Zahlen ( z.B. Kommastellen, Negativzahlen etc.)

				// Create-Funktion aufrufen
				Drinks.create($scope.formData)

                    // Falls erfolgreich erstellt, zeig alle Drinks-Elemente
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // Die Felder leeren, damit neue Elemente hinzugefügt werden können
						$scope.drinks = data; // Zuweisung der neuen Liste
					});
			}
		};

        // Alle Drinks-Mengen addieren und anzeigen mit einer for-Schleife
        $scope.getTotal=function(){

            var total=0;
            for (var i=0; i <$scope.drinks.length; i++){
                total += $scope.drinks[i].menge;
                console.log($scope.drinks[i].menge); console.log("Test");
            }

            return total;
        }


        // Alle Drinks-Mengen addieren und anzeigen mit einer for-Schleife und nur heute ausgeben
        $scope.date = Date.now;
        $scope.getToday=function(){

            var total=0;

            for (var i=0; i <$scope.drinks.length; i++){
                total += $scope.drinks[i].menge;
                console.log($scope.drinks[i].menge); console.log("Test");
            }

            if ($scope.drinks.zeit = Date.now()){ return total;}
            else{ return "Irgendwas ist schiefgelaufen";}

        }


		//Testing Date TODO get working
		$scope.test=function(){
            var total="Klappt noch nicht";

            if ($scope.drinks.zeit > Date.now()){
                return true;
            }
            else{

            return total;

		}}



		// ####### DELETE ######
		// Löschen von Drinks-Elementen
		$scope.deleteDrink = function(id) {
			$scope.loading = true;

			Drinks.delete(id)
                //Falls die Löschung erfolgreich ist, zeig alle erstellten Drinks-Elemente an.
				.success(function(data) {
					$scope.loading = false;
					$scope.drinks = data; // Zuweisung der neuen Liste
				});
		};
	}]);
