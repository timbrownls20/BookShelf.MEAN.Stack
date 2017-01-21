(function () {
    'use strict';

    angular
      .module('app')
      .directive('errorDisplay', [function(){
          return {
              scope:
              {
                  display : "=display"
              },
              templateUrl: "/views/directives/errorDisplay.html"
          };
      }]);

    
})();