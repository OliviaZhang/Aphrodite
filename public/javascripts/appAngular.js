var app = angular.module('Aphrodite', ['ui.router']);
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('register', {
            url: '/register',
            templateUrl: 'views/index.ejs',
            controller: 'RegisterController'
        });

    $urlRouterProvider.otherwise('home');
}]);
app.controller('MainCtrl', ['$scope', function($scope) {
    $scope.test = 'Hello world';
}]);

app.controller('RegisterController', ['$scope', function($scope) {
    $scope.test = 'register';
}]);
