(function () {
    'use strict';

    
    angular.module('app')
    .service('bookPersistService', ['$http', 'appConfig', function ($http, appConfig) {

        var serviceRoot = appConfig.apiRoot;

        this.list = function() {
            var url = serviceRoot + "books";
            return $http.get(url);
        };

        this.save = function(data) {
            var url = serviceRoot + "book";
            return $http.post(url, data);
        };

        this.delete = function(id) {
            var url = serviceRoot + "book/" + id;
            return $http.delete(url);
        };

    }]);
})();