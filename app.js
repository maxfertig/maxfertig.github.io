var app = angular.module('app', ['ngRoute']);

app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

app.config(function($routeProvider) {
    $routeProvider
    
    .when('/', {
        templateUrl : 'pages/home.html',
        controller : 'HomeController'
    })
    
    .when('/about', {
        templateUrl : 'pages/about.html',
        controller : 'AboutController'
    })
    
    .when('/contact', {
        templateUrl : 'pages/contact.html',
        controller : 'ContactController'
    })
    
    .otherwise({redirectTo: '/'});
});

app.controller('HomeController', function($scope) {
    $scope.message = 'Hello from FirstController';
});

app.controller('AboutController', function($scope) {
    $scope.message = 'Hello from SecondController';
});

app.controller('ContactController', function($scope) {
    $scope.message = 'Hello from ThirdController';
});