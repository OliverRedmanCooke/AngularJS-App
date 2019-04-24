app.controller('AllDataController', ['$scope', 'photos', function($scope, crypto) {
  crypto.success(function(data) {
    $scope.crypto = data;
  });
  }]);

