(function () {
    'use strict';

    
    angular.module('app')
    .service('bookPersistService', ['$http', 'appConfig', function ($http, appConfig) {

        var serviceRoot = appConfig.apiRoot;
        var service = this;

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

        this.map = function(googleBook){
            var mappedBook = {
                googleId: googleBook.id,
                title: googleBook.volumeInfo.title,
                description: googleBook.volumeInfo.description,
                pageCount: googleBook.volumeInfo.pageCount,
                publisher: googleBook.volumeInfo.publisher,
                publishedDate: googleBook.volumeInfo.publishedDate,
                thumbnail: googleBook.volumeInfo.imageLinks.thumbnail,
                //authors: googleBook.volumeInfo.authors
                authors: []
            };

            if(googleBook.volumeInfo.authors != null){
                googleBook.volumeInfo.authors.forEach(function(author) {
                    mappedBook.authors.push({name: author})
                }, this);
            }

            return mappedBook;
        };

        this.mapArray = function(googleBooks)
        {
            var mappedArray = [];
            for(var i = 0; i < googleBooks.length; i++)
            {
                mappedArray.push(service.map(googleBooks[i]));
            }
            return mappedArray;
        };


    }]);
})();