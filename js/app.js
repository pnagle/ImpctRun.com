(function () {
    'use strict';
 var app = angular.module('sharingsmiles', ['ngRoute', 'ngCookies'])
        .config(config)

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/home', {
                controller: 'HomeController',
                templateUrl: 'templates/Home.html',
                reloadOnSearch: false
               
            })
            
            // .when('/blog', {
            //       controller: 'ExController',
            //   templateUrl: 'templates/blog.html'
                
            // })
         
        .otherwise({ redirectTo: '/home' });
    }

 
})();