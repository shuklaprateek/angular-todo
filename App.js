/*var app= angular.module("Todo",[]);

app.controller('TodoCtrl',function($scope){

	$scope.message="This is not the first time I'm doing this but it doesn't feel like it.";   // scope is the link between our controller and our view.
	// the process of adding it to thew page is called data binding.



});

*/
var app = angular.module('Todo', []);
app.controller('TodoCtrl', function($scope) {
  $scope.todos = ['1) Wash clothes',
				   '2)checkup notes',	
				   '3)Match and make pair of clothes',
				   
		];


  $scope.done=function(todo){

  		var indexof= $scope.todo.indexof(todo);
  		if(indexof!= -1){
  			$scope.todos.splice(indexof,1);
  		}

  };

  $scope.add = function(e) {
  	if (e.which && e.which==13){
  		$scope.todo.push($scope.newTodo);
  		$scope.newTodo='';
  	}
  };

});  