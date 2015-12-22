angular.module('myApp')
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: '/static/show',
                controller: 'homeController'
            })
            .when('/form', {
                templateUrl: 'articles/new',
                controller: 'homeController'
            })
            .when('/show', {
                templateUrl: '/static/show',
                controller: 'homeController'
            })
            .when('/edit', {
                templateUrl: 'articles/edit',
                controller: 'homeController'
            });
    }]);