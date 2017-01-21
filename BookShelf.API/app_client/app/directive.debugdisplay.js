(function () {
    'use strict';

    angular
      .module('app')
      .directive('debugDisplay', ['appConfig', function(appConfig){
          return {
              scope:
              {
                  display : "=display"
              },
              templateUrl: "/views/directives/debugDisplay.html",
              link: function(scope, elem, attrs) {

                  //console.log("directive Debug param " + appConfig.debug);

                  if(appConfig.debug == 0){
                      for(var i = 0; i < elem.length; i++)
                        elem[i].innerText = '';
                  }
              }
          };
      }]);

    
})();
