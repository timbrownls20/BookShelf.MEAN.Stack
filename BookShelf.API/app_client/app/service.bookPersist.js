(function () {
    'use strict';

    
    angular.module('app')
    .service('bookPersistService', ['$http', function ($http) {

        var serviceRoot = "http://localhost:3000/api/"

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