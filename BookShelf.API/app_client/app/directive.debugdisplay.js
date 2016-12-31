(function () {
    'use strict';

    angular
      .module('app')
      .directive('debugDisplay', ['DebugOn', function(DebugOn){
          return {
              scope:
              {
                  display : "=display"
              },
              templateUrl: "/views/directives/debugDisplay.html",
              link: function(scope, elem, attrs) {
                  if(DebugOn == 0){
                      for(var i = 0; i < elem.length; i++)
                        elem[i].innerText = '';
                  }
              }
          };
      }]);

    
})();
