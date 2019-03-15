angular.module('appnumerodos', []).controller('tablausuarios', function ($scope) {
	// Buscador de Usuarios
	$scope.buscar = '';
	$scope.nuevoUsuario = {};
	// Usuario de Ejemplo
	$scope.usuarios = [
		{
			nombre:"Nombre 1", 
			telefono:"44445555", 
			email:"test@test.com", 
			empresa:"Empresa 1", 
			puesto:"Puesto"
		}
	];
	// Mediante un Push agrego un nuevo dato al arrary de usuarios
	$scope.agregarUsuario=function () {
		$scope.usuarios.push($scope.nuevoUsuario);
		$scope.nuevoUsuario = {};
	};
	// Mediante un splice elimino el elemento seleccionado segun el id ($index)
	$scope.borrarUsuario=function(index){
		$scope.usuarios.splice(index, 1);
	};
	// Vuelvo a abrir el formulario con los datos ya cargados, esto me permite editar cualquier dato dentro del array (menos el id)
	$scope.editarUsuario=function(usuario){
		$scope.nuevoUsuario=usuario;
	};
});
