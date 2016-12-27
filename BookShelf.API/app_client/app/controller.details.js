(function () {
    'use strict';

    angular
        .module('app')
        .controller('detailsController', ['$scope', '$routeParams', 'bookService', function detailsController($scope, $routeParams, bookService) {
       
        var vm = this;
        vm.title = 'detailsController';
        var id = $routeParams.id;
        
        bookService.get(id)
            .then(function (response) {
                $scope.book = response.data;
            });

    }])
})();
