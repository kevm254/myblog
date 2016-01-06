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
        $http.get('./articles').success(function(response){
            $scope.articles = response.articles;
        });
        /////////////////////////////////////////////////////


        // get a single article and assign text to variable
        $scope.getArticle = function(id){
            $http.get('./articles/' + id).success(function(response){
                $scope.articleText = response.text;
            });
        };
        /////////////////////////////////////////////////////

        // Post
        $scope.editArticle = function(id){

        };
        /////////////////////////////////////////////////////

    }]);