﻿(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute', 'infinite-scroll']);
    
    app.config(function ($routeProvider) {
        
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
        .when("/library", {
            templateUrl: "/views/library.html",
            controller: 'libraryController'
        })
        .otherwise({ redirectTo : "/" });

        // var debugParam = urlUtilsProvider.$get().getDebugParam();
        // console.log("debugParam: " + debugParam);
        // app.value("DebugOn", debugParam);
        
    });

    // app.value("DebugOn", 0);
    // app.run(function(urlUtilsService){

    //     var debugParam = urlUtilsService.getDebugParam();
    //     console.log("debugParam: " + debugParam);
    //     app.value("DebugOn", debugParam);

    // });

    var utils = new urlUtils();
    var debugParam = utils.getDebugParam();
    console.log("debugParam: " + debugParam);
    app.value("DebugOn", debugParam);


    angular.module('infinite-scroll').value('THROTTLE_MILLISECONDS', 500);

 

})();