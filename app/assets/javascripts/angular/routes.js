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
                    'new': {
                        templateUrl: '/articles/new',
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


            $urlRouterProvider.otherwise('/');

    }]);
