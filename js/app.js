(function () {
    'use strict';
   var app = angular.module('Impactrun', ['ngRoute', 'ngCookies'])
        .config(config)

    config.$inject = ['$routeProvider', '$locationProvider',];
    function config($routeProvider, $locationProvider) {
       // $locationProvider.html5Mode(true);
        $routeProvider
            .when('/home', {
                controller: 'HomeController',
                templateUrl: 'templates/Home.html',
                reloadOnSearch: false
               
            })
            
            .when('/blog', {
              controller: 'BlogController',
              templateUrl: 'templates/Blog.html'
            })
            
             .when('/faq', {
              templateUrl: 'templates/faq.html',
              controller:'FaqController'
            })
             .when('/AboutUs', {
              templateUrl: 'templates/AboutUs.html',
              controller:'AboutusController'
            })
        .otherwise({ redirectTo: '/home' });
    }


 
})();