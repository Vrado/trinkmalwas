angular.module('drinkService', []) // Service um die Inhalte zu holen

    // Jede Funktion gibt ein Promise-Objekt wieder.
	.factory('Drinks', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/drinks');
			},
			create : function(drinkData) {
				return $http.post('/api/drinks', drinkData);
			},
			delete : function(id) {
				return $http.delete('/api/drinks/' + id);
			}
		}
	}]);
