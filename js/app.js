(function () {
    'use strict';
   var app = angular.module('Impactrun', ['ngRoute', 'ngCookies'])
        .config(config)
     app.service('anchorSmoothScroll', function(){

    this.scrollTo = function(eID) {

        // This scrolling function
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript

        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 5);
        if (speed >= 10) speed = 10;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }

        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }

        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }

    };

});

    config.$inject = ['$routeProvider', '$locationProvider',];
    function config($routeProvider, $locationProvider) {
       $locationProvider.html5Mode({
     enabled: true,
       requireBase: false
  });
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
              templateUrl: 'templates/faq.html',
              controller:'FaqController'
            })
             .when('/AboutUs', {
              templateUrl: 'templates/AboutUs.html',
              controller:'AboutusController'
            })
        .otherwise({ redirectTo: '/' });
    }



})();