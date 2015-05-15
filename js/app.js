angular.module("myFirstSPA", ["ngRoute", "postCtrlModule", "postServModule"])
	.config(["$routeProvider", function($routeProvider) {
		$routeProvider
		.when("/", {
			controller: "PostController",
			templateUrl: "../partials/posts/index.html"
		})
		.when("/p/:postId", {
			controller: "PostController",
			templateUrl: "../partials/posts/detail.html"
		})
		.otherwise({ redirectTo: "/" })
	}]);