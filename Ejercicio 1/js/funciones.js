angular.module('appnumerouno', []).controller('vistaimagenes', function ($scope, $http) {
	// Buscador de imagenes
	$scope.buscar = ''
	$scope.imagenes = [];
	// Limite de 20 imagenes
	$scope.cantidad = 20;
	// Uso el protocolo http para poder obtener los datos 
	$http.get('https://jsonplaceholder.typicode.com/photos').then(function (servidor) {
		// Prueba en la consola
		console.log(servidor.data);
		// Especifico donde esta el array para luego pasarlo al ng-repeat
		$scope.imagenes = servidor.data;
	});

});
