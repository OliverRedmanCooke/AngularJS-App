var app = angular.module('GalleryApp', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'HomeController', 
      templateUrl: 'views/home.html' 
    }) 
  .when('/photos/:id', { 
      controller: 'PhotoController', 
      templateUrl: 'views/photo.html' 
    }) 
    .when('/all-data', { 
      controller: 'AllDataController', 
      templateUrl: 'views/AllData.html' 
    }) 
    .otherwise({ 
      controller: 'RedirectController', 
      templateUrl: 'views/redirect.html' 
    }); 
}); 