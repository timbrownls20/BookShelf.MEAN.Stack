(function () {
    'use strict';

    angular
      .module('app')
      .directive('bookSummary', [function(){
          return {
              scope:
              {
                  book : '=book',
                  addtolibrary : '=addtolibrary',
                  remove : '=remove',
                  index : '=index',
                  removeBook : '&removeBook'
              },
              templateUrl: "/views/directives/bookSummary.html"
          };
      }]);

    
})();