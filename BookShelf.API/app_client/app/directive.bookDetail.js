(function () {
    'use strict';

    angular
      .module('app')
      .directive('bookDetail', [function(){
          return {
              scope:
              {
                  book : '=book'
              },
              templateUrl: "/views/directives/bookDetail.html",
              link: function(scope, elem, attrs) {
                    var i = scope;

              }
          };
      }]);
   
})();