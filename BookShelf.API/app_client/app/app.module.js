(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute', 'infinite-scroll']);
    
    app.config(function ($routeProvider, $locationProvider) {
        
        $routeProvider
        .when("/", {
            templateUrl: "/views/search.html",
            controller: 'searchController',
            controllerAs: 'vm'
        })
        .when("/details/:id", {
            templateUrl: '/views/details.html',
            controller: 'detailsController',
            controllerAs: 'vm'
        })
        .when("/library-add/:id", {
            templateUrl: '/views/library-add.html',
            controller: 'libraryController',
            controllerAs: 'vm'
        })
        .when("/library-list", {
            templateUrl: "/views/library.html",
            controller: 'libraryController',
            controllerAs: 'vm'
        })
        .otherwise({ redirectTo : "/" });

        $locationProvider.html5Mode(true); //.hashPrefix('!');

       
        
    });

    // var utils = new urlUtils();
    // var debugParam = utils.getDebugParam();
    // console.log("debugParam: " + debugParam);
    // app.value("DebugOn", debugParam);

    app.constant("appConfig", window.appConfig);

    angular.module('infinite-scroll').value('THROTTLE_MILLISECONDS', 500);


})();