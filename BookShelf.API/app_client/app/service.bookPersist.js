(function () {
    'use strict';

    
    angular.module('app')
    .service('bookPersistService', ['$http', function ($http) {

        var serviceRoot = "http://localhost:3000/api/"

        this.list = function() {

            var url = serviceRoot + "books";
            //console.log(url);
            return $http.get(url);
        };

        // return 
        // {
        //     list: this.list
        // }
    }]);
})();