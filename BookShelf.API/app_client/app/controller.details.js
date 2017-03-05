(function () {
    'use strict';

    angular
        .module('app')
        .controller('detailsController', ['$routeParams', 'bookSearchService', 'bookPersistService', 
                    function detailsController($routeParams, bookSearchService, bookPersistService) {
       
        var vm = this;
        vm.title = 'detailsController';
        var id = $routeParams.id;
        
        this.getBookDetails = function()
        {
            bookSearchService.get(id)
            .then(function (response) {
                vm.book = bookPersistService.map(response.data);
            });

        }
       
    }])
})();
