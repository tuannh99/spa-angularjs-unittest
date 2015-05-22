(function() {
	angular.module('postCtrlModule', [])
	.controller('PostController', PostController);

	PostController.$inject = ["$scope", "$routeParams", "PostService"];

	function PostController($scope, $routeParams, PostService) {
		$scope.getPosts = PostService.get();
		$scope.getPost = function() {
			return PostService.show($routeParams.postId);
		}
	}
})();