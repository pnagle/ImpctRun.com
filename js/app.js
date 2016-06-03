(function () {
    'use strict';
   var app = angular.module('sharingsmiles', ['ngRoute', 'ngCookies',])
        .config(config)

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'templates/Home.html',
                reloadOnSearch: false
               
            })
            
            .when('/blog', {
              controller: 'BlogController',
              templateUrl: 'templates/Blog.html'
            })
            
             .when('/faq', {
              templateUrl: 'templates/faq.html'
            })
             .when('/AboutUs', {
              templateUrl: 'templates/AboutUs.html'
            })
        .otherwise({ redirectTo: '/' });
    }
 
 
})();