(function () {
    'use strict';

    angular
      .module('app')
      .filter('stringConcat', function () {
        return function (input, delimiter) {
            if (input) {
                return input.join(delimiter)
            }
            else {
                return '';
            }
        };
      });

    angular
      .module('app')
      .filter('rawHtml', ['$sce', function ($sce) {
        return function (val) {
            return $sce.trustAsHtml(val);
        };
    }]);

})();


