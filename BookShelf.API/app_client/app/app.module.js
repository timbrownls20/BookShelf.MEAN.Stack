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

    var debugParam = getDebugParam();
    console.log("debugParam: " + debugParam);
    app.value("DebugOn", debugParam);

})();

function getDebugParam(){
    var debugParam = getParameterByName("Debug");
    if(!debugParam) debugParam = 0;
    return debugParam;
}

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}