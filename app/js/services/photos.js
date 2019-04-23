app.factory('photos', ['$http', function($http) {
    return $http.get('https://api.coindesk.com/v1/bpi/currentprice.json')
           .success(function(data) {
             return data;
           })
           .error(function(data) {
             console.log("this is wrong");
           });
  }]);

  