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
                    //scope.test1 = "TB Test";

              },
              controller: function($scope, $element) {
                  var vm = this;
                  
                  if($scope.library == true){
                     vm.detailsLink = "library-details/" + $scope.book._id
                  }
                  else{
                      vm.detailsLink = "details/" + $scope.book.googleId
                  }
              },
              controllerAs:'vm'
          };
      }]);

    
})();