﻿(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute', 'infinite-scroll', 'BookService']);
    
    app.config(function ($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl: "/views/search.html"
        })
        .when("/details/:id", {
            templateUrl: "/views/details.html"
        })
        .otherwise({ redirectTo : "/" })
        
    });

    app.filter('rawHtml', ['$sce', function ($sce) {
        return function (val) {
            return $sce.trustAsHtml(val);
        };
    }]);

   /*app.filter('stringConcat', function () {
       return function (input, delimiter) {
           if (input) {
               return input.join(delimiter)
           }
           else {
               return '';
           }
       };
    });*/

    angular.module('infinite-scroll').value('THROTTLE_MILLISECONDS', 500);
})();