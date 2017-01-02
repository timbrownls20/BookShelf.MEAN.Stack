﻿(function () {
    'use strict';

    angular
        .module('app')
        .controller('searchController', ['bookSearchService', function (bookSearchService) {
        
            var vm = this;
            vm.title = 'searchController';
            var page = 1;
        
            vm.search = function () {
                vm.searchResults = null;
                getResults();
            };

            vm.loadMore = function () {
                //console.log("load more")
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
                    });
            }

            function getStartIndex() {
                return (page - 1) * 12
            }
    }])
})();

