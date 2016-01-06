angular.module('myApp')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        $stateProvider
        // VIEWS /////////////////////////////////////////////
            // HOME //
            .state('articles', {
                url: '/articles',
                templateUrl: './templates/articles.html',
                controller: 'homeController'
            });
            // EVERYTHING ELSE //
            $urlRouterProvider.otherwise('/');

    }]);
