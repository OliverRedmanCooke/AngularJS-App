app.controller('PhotoController', ['$scope', 'photos', '$routeParams' , '$location' , function($scope, crypto, $routeParams, $location) {
    crypto.success(function(data) {
      $scope.detail = data.bpi[$routeParams.id];
    });
    $scope.myUrl = $location.absUrl();
  }]);  
