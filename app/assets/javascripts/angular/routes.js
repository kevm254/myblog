angular.module('myApp')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        $stateProvider
        // VIEWS /////////////////////////////////////////////
            // HOME //
            .state('home', {
                url: '/',
                templateUrl: './templates/index.html.erb'
            })

            // ARTICLES //
            .state('articles', {
                url: '/articles',
                templateUrl: './templates/articles.html',
                controller: 'homeController'
            })

            // PORTFOLIO //
            .state('portfolio', {
               url: '/portfolio',
                templateUrl: './templates/portfolio.html'
            });

            // EVERYTHING ELSE //
            $urlRouterProvider.otherwise('/');

    }]);
