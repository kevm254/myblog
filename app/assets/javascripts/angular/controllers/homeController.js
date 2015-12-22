angular.module('myApp')
    .controller('homeController', ['$scope', '$http', function($scope, $http){
        $http.get('./articles').success(function(response){
            $scope.test = response.articles;
        })
    }]);