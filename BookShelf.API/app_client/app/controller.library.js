(function () {
    'use strict';

    angular
        .module('app')
        .controller('libraryController', ['bookPersistService', function libraryController(bookPersistService) {
       
        var vm = this;
        vm.title = 'libraryController';

        this.getLibrary = function() {

            bookPersistService.list()
                .then(function (response) {
                    vm.library = response.data;
                });
        }

        //return { getLibrary: vm.getLibrary  }

    }])
})();
