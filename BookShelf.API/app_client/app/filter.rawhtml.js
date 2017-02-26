(function () {
    'use strict';

    angular
      .module('app')
      .filter('rawhtml', ['$sce', function ($sce) {
        return function (val) {
            return $sce.trustAsHtml(val);
        };
    }]);

})();


