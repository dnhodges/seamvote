(function() {
  'use strict';

  function seamvote() {
    return {
      bindToController: true,
      controller: 'SeamvoteCtrl',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {},
      templateUrl: 'app/components/seamvote/seamvote.html'
    };
  }
  angular
    .module( 'seamvoteApp' )
    .directive( 'seamvote', seamvote );
})();
