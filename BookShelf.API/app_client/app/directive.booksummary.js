(function () {
    'use strict';

    angular
      .module('app')
      .directive('bookSummary', [function(){
          return {
              scope:
              {
                  book : '=book',
                  index : '=index',
                  library: '=library',
                  removeBook : '&removeBook'
              },
              templateUrl: "/views/directives/bookSummary.html",
              link: function(scope, elem, attrs) {
                    var i = scope;

              }
          };
      }]);

    
})();