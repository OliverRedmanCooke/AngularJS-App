app.controller('HomeController', ['$scope', 'photos', function($scope, crypto) {
  crypto.success(function(data) {
      $scope.crypto = data;
    });
  $scope.plusOne = function(index) { 
  	$scope.crypto.bpi[index].rate += 1; 
	};
	$scope.minusOne = function(index) { 
  	$scope.crypto.bpi[index].rate = 1; 
  };
  $scope.changeName = function() {
    $scope.crypto.disclaimer = "You can do whatever you want";
  }
  $scope.mySwitch = true;


  }]);

