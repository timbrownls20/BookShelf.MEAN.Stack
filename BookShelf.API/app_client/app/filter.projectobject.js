(function () {
    'use strict';

    angular
      .module('app')
      .filter('projectobject', function () {
        return function (input, propertyName) {
            
            var returnValue = [];
            if(Array.isArray(input))
            {
                input.forEach(function(element){
                    projectToArray(element);
                }, this);
            }
            else
            { 
                projectToArray(input);
            }

            return returnValue;

            function projectToArray(element){

                if(element){
                    var projection = element[propertyName];
                    returnValue.push(projection);
                }
            }
        };
      });
   
})();