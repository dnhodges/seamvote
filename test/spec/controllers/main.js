'use strict';

describe('Controller: SeamvoteCtrl', function () {

  // load the controller's module
  beforeEach(module('seamvoteApp'));

  var SeamvoteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SeamvoteCtrl = $controller('SeamvoteCtrl', {
      $scope: scope
    });
  }));
});
