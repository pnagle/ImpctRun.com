(function () {
    'use strict';
 var app = angular.module('sharingsmiles', ['ngRoute', 'ngCookies'])
        .config(config)

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'templates/Home.html',
                reloadOnSearch: false
               
            })
            
            // .when('/blog', {
            //       controller: 'ExController',
            //   templateUrl: 'templates/blog.html'
                
            // })
         
        .otherwise({ redirectTo: '/' });
    }
 
 
})();