(function () {
    'use strict';

    angular
        .module('app')
        .controller('libraryController', ['$routeParams', '$location', 'bookPersistService', 'bookSearchService',  
                        function libraryController($routeParams, $location, bookPersistService, bookSearchService) {
       
        console.log('library controller');

        var id = $routeParams.id;
        var vm = this;
        vm.title = 'libraryController';

        this.getLibrary = function() {

            bookPersistService.list()
                .then(function (response) {
                    vm.library = response.data;
                });
        };

        this.findBook = function() {

            console.log('findBook');

            bookSearchService.get(id)
                .then(function (response) {
                    vm.book = response.data;
                });
        };

        this.onSubmit = function() {
            console.log('save book to library');

            var bookToAdd = {
                title: vm.book.volumeInfo.title,
                description: vm.book.volumeInfo.description
            };

            bookPersistService.save(bookToAdd)
                .then(function (response) {
                    $location.path('/library-list')
                });
        };

    }])
})();
