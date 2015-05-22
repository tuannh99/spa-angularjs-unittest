'use strict';

describe('Controller: Post Controller', function () {

  // First, we load the app's module. IMPORTANT: keep the right orders!
  beforeEach(module('postServModule'));
  beforeEach(module('postCtrlModule'));
  beforeEach(module('myFirstSPA'));

  // Then we create some variables we're going to use
  var postController, scope;

  // Mock the service
  beforeEach(
  	module(function($provide) {
  		$provide.service("PostService", function() {
  			this.get = function() {
  				return ["data"];
  			};
  		});	
  	})
  );

  // Inject controller
  beforeEach(
  	inject(function ($controller, $rootScope, _$routeParams_, _PostService_) {
	    // Here, we create a mock scope variable, to replace the actual $scope variable
	    // the controller would take as parameter
	    scope = $rootScope.$new();

	    // Here, we actually initialize our controller, passing our new mock scope as parameter
	    postController = $controller('PostController', {
	    	$scope: scope,
	    	$routeParams: _$routeParams_,
	    	PostService: _PostService_
	    });
	})
  );


  // Now, for the actual test
  it('Controller should call service to get all posts', function () {
  	expect(scope.getPosts).toEqual(["data"]);
  });
});