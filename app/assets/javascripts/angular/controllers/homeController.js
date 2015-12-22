angular.module('myApp')
    .controller('homeController', ['$scope', '$http', function($scope, $http){
        $http.get('./articles').success(function(response){
            $scope.articles = response.articles;
        });

        $scope.getArticle = function(){
            $http.get('./articles/1'). success(function(response){
                alert(response);
            });
        };
    }]);