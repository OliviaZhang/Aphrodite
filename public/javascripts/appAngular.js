var app = angular.module('Aphrodite', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){


      $stateProvider
          .state('home',{
                url: '/',
                controller: 'HomeCtrl',
                templateUrl: '/views/home.ejs'
          })
          .state('register',{
                url: '/register',
                templateUrl: '/views/register.ejs',
                controller: 'RegisterCtrl'
          })
          .state('login',{
                url: '/login',
                templateUrl: '/views/login.ejs',
                controller: 'LoginCtrl'
          })
          .state('inside',{
                url: '/inside',
                templateUrl: '/views/inside.ejs',
                controller: 'InsideCtrl'
          });

    $urlRouterProvider.otherwise('home');


}]);
app.controller('MainCtrl', ['$scope', function($scope) {
    $scope.test = 'Hello world';
}]);

app.controller('HomeCtrl', ['$scope', function($scope) {
    $scope.test = 'Hello Home!!';
}]);

app.controller('RegisterCtrl', ['$scope', function($scope) {
    $scope.test = 'Hello Register!!';
}]);

app.controller('LoginCtrl', ['$scope', function($scope) {
    $scope.test = 'Hello Login!!';
}]);

app.controller('InsideCtrl', ['$scope', function($scope) {
    $scope.test = 'Hello Member!!';
}]);
