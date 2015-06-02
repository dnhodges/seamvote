(function() {
  'use strict';

  function choice( modals, vote ) {
    var choices = [];
    var SELECTED = 'button-selected';

    return {
      bindToController: true,
      controller: 'ChoiceCtrl',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
        name: '=',
        showModal: '='
      },
      templateUrl: 'app/components/seamvote/choice/choice.html',
      link: function( scope, element, attrs ) {

        element.bind( 'click', function( event ) {
          event.preventDefault();

          if ( choices.length < 4 ) {
            updateChoices( element, event.target.innerText.trim() );
            console.log( choices );
          } else {
            console.log( "You can't order anymore!" );

            confirmChoices(scope, element, scope.vm);
          }
        } );
      }
    };

    function updateChoices( element, name ) {
      var choiceIndex = choices.indexOf( name );

      if ( choiceIndex === -1 ) {
        choices.push( name );
        element.addClass( SELECTED );
      } else {
        choices.splice( choiceIndex, 1 );
        element.removeClass( SELECTED );
      }
    }

    function confirmChoices(scope, element, vm) {

      //vm.showModal = true;


      var txt;
      var r = confirm("Are you sure you want you want to submit?");
      if (r == true) {
        vote.voteFor(choices);
        window.location = "http://www.seamless.com"
      } else {

      }

/*      scope.$apply(function() {
        vm.showModal = true;
      });

      var promise = modals.open(
        "confirm",
        { message: "Are you sure you want to taste that?!" }
      );

      promise.then(
        function handleResolve( response ) {
          console.log( "Confirm resolved." );
        },
        function handleReject( error ) {
          console.warn( "Confirm rejected!" );
        }
      );*/
    }
  }

  angular
    .module( 'seamvoteApp' )
    .directive( 'choice', [ 'modals', 'vote', choice ] )
})();
