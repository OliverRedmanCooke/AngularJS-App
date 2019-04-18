app.controller('PhotoController', ['$scope', 'photos', '$routeParams', function($scope, crypto, $routeParams) {
    crypto.success(function(data) {
      $scope.detail = data.bpi[$routeParams.id];
    });
  }]);  