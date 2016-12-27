(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute', 'infinite-scroll']);
    
    app.config(function ($routeProvider) {
        
        $routeProvider
        .when("/", {
            templateUrl: "/views/search.html",
            controller: 'searchController'
        })
        .when("/details/:id", {
            templateUrl: '/views/details.html',
            controller: 'detailsController',
            controllerAs: 'vm'
        })
        .when("/library", {
            templateUrl: "/views/library.html",
            controller: 'libraryController'
        })
        .otherwise({ redirectTo : "/" });
        
    });

    angular.module('infinite-scroll').value('THROTTLE_MILLISECONDS', 500);

})();