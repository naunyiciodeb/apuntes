var app = angular.module('debButton-app', [ ]);

app.directive('debButtom', function(){
	return {
		restrict: 'E',
		scope: {
			textButtom: '='
		},
		transclude: true,
		templateUrl: '<button>{{busqueda}}</button>',
	};
})


  