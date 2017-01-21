(function () {
    'use strict';

    angular
      .module('app')
      .directive('infoDisplay', [function(){
          return {
              scope:
              {
                  display : "=display"
              },
              templateUrl: "/views/directives/infoDisplay.html"
          };
      }]);

    
})();