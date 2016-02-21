var app = angular.module('Aphrodite', []);
console.log(app);
app.controller('MainCtrl', ['$scope', function($scope) {
    $scope.test = 'Hello world';
}]);
