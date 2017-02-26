(function () {
    'use strict';

    angular
      .module('app')
      .filter('stringconcat', function () {
        return function (input, delimiter) {
            if (input) {
                return input.join(delimiter)
            }
            else {
                return '';
            }
        };
      });

})();


