(function () {
    'use strict';

    angular.module('app')
    .service('bookSearchService', ['$http', function ($http) {

        var service = this;

        this.search = function(searchTerm, startIndex) {

            service.searchTerm = searchTerm;

            var url = 'https://www.googleapis.com/books/v1/volumes?maxResults=12&q=' + searchTerm + '&startIndex=' + startIndex;
            return $http.get(url);
        }

        this.get = function(id)        {
            var url = 'https://www.googleapis.com/books/v1/volumes/' + id;
            return $http.get(url);
        }

    }]);
})();


