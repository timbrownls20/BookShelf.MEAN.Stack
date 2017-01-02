(function () {
    'use strict';

    angular
        .module('app')
        .controller('detailsController', ['$routeParams', 'bookSearchService', function detailsController($routeParams, bookSearchService) {
       
        var vm = this;
        vm.title = 'detailsController';
        var id = $routeParams.id;
        
        bookSearchService.get(id)
            .then(function (response) {
                vm.book = response.data;
            });

    }])
})();
