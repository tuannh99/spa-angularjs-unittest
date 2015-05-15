angular.module('postCtrlModule', [])
.controller('PostController', function($scope, $routeParams, PostService) {
	$scope.getPosts = PostService.get();
	$scope.getPost = function() {
		return PostService.show($routeParams.postId);
	}
})