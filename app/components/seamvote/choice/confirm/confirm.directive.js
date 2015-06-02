(function() {
  'use strict';

  function confirm() {

    return {
      bindToController: true,
      controller: 'ConfirmCtrl',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {},
      templateUrl: 'app/components/seamvote/choice/confirm/confirm.html'
    }
  }

  angular
    .module( 'seamvoteApp' )
    .directive( 'confirm', confirm );
})();
