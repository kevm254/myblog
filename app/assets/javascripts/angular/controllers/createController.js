angular.module('myApp')
    .controller('createController', ['$scope', '$http', function($scope, $http){
        $scope.user = {};
        $scope.wasSubmitted = false;

        $scope.useIt = factory.alert();
        $scope.submit = function(){
            $scope.wasSubmitted = true;
        }
    }]);