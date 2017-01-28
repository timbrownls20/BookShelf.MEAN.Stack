(function () {
    'use strict';

    angular
        .module('app')
        .controller('searchController', ['bookSearchService', function (bookSearchService) {
        
            var vm = this;
            vm.title = 'searchController';
            var page = 1;
            
            vm.searchTerm = bookSearchService.searchTerm;

            vm.search = function () {
                
                if(vm.searchTerm){
                    vm.Info = "Searching ...";
                    vm.searchResults = null;
                    getResults();
                }
       
            };

            vm.loadMore = function () {
                getResults();
            }

            function getResults() {

                page += 1;
                bookSearchService.search(vm.searchTerm, getStartIndex())
                    .then(function (response) {

                        if (vm.searchResults) {
                            for (var i = 0; i < response.data.items.length; i++) {
                                vm.searchResults.items.push(response.data.items[i]);
                            }
                        }
                        else {
                            vm.searchResults = response.data;
                        }

                        vm.Info = null;
                    });
            }

            function getStartIndex() {
                return (page - 1) * 12
            }
    }])
})();

