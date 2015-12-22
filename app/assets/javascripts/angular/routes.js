angular.module('myApp')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    'main': {
                        templateUrl: '/static/list',
                        controller: 'homeController'
                    },
                    'show': {
                        templateUrl: '/static/show',
                        controller: 'homeController'
                    }
                }
            })
            .state('new', {
                url: '/new',
                views: {
                    'main': {
                        templateUrl: 'articles/new',
                        controller: 'homeController'
                    }
                }

            })
            .state('show', {
                url: '/show',
                views: {
                    'main': {
                        templateUrl: '/static/list',
                        controller: 'homeController'
                    },
                    'show': {
                        templateUrl: '/static/show',
                        controller: 'homeController'
                    }
                }
            });


            $urlRouterProvider.otherwise('/');

    }]);
