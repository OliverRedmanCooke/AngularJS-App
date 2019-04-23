app.controller('RedirectController',  ['$scope', '$timeout', function($scope, $timeout) {
      $scope.message = "Sorry, you took a wrong turn ";
       $timeout( function(){
        $scope.message = "What are you waiting for?";
    }, 5000 );
  }]);

