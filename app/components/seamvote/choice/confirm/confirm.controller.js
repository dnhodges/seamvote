(function() {
  'use strict';

  function ConfirmCtrl( $scope, modals ) {

    var params = modals.params();

    $scope.message = ( params.message || "Are you sure you want to submit?" );
    $scope.confirmButton = ( params.confirmButton || "Yes!" );
    $scope.denyButton = ( params.denyButton || "Oh, hell no!" );

    $scope.confirm = modals.resolve;
    $scope.deny = modals.reject;
  }

  angular.module( 'seamvoteApp' )
    .controller( 'ConfirmCtrl', [ '$scope', 'modals', ConfirmCtrl ] )
})();
