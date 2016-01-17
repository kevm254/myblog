angular.module('myApp')
    .controller('homeController', ['$anchorScroll', '$location', '$scope', '$http', function($anchorScroll, $location, $scope, $http){

        // Scrolls to the top of the page
        $scope.scrollTop = function(){
            $location.hash('top');
            $anchorScroll();
        };
        /////////////////////////////////////////////////////
        $scope.use = "hi there";

        // Get all of the articles
        $scope.getAllArticles = function(){
            $http.get('./api/articles').success(function(response) {
                $scope.articles = response.articles_api;

            });
        };


        /////////////////////////////////////////////////////


        // get a single article and assign text to variable
        $scope.getArticle = function(id){
            $http.get('.api/articles/' + id).success(function(response){
                $scope.articleText = response.text;
            });
        };
        /////////////////////////////////////////////////////

        // Post
        $scope.editArticle = function(id){
            $http.post("/articles/new", data).success(function(data, status){
                $scope.hello = data;
                $scope.status = status;
            })

        };
        /////////////////////////////////////////////////////

    }]);