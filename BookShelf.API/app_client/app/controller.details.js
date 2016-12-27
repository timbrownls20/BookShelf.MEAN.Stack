(function () {
    'use strict';

    angular
        .module('app')
        .controller('detailsController', ['$routeParams', 'bookService', function detailsController($routeParams, bookService) {
       
        var vm = this;
        vm.title = 'detailsController';
        var id = $routeParams.id;
        
        bookService.get(id)
            .then(function (response) {
                vm.book = response.data;
            });

    }])
})();
