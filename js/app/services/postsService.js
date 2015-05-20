(function() {
	angular.module("postServModule", [])
	.factory("PostService", function() {
		var posts = [
		{
			"title": "TechFest is being organized today!",
			"content": "There're so many co-founder and investors here. So exciting!",
			"comments": ["Great", "We like it", "Hope to meet u guyz"]
		},
		{
			"title": "Apple to give out new iPhone model!",
			"content": "iPhone 8 is there for you all!",
			"comments": ["Can't wait", "I want it"]
		},
		{
			"title": "Will you install Windows 10 tomorrow?",
			"content": "The queue is full!",
			"comments": []
		},
		];

		return {
			get: function() {
				return posts;
			},
			show: function(id) {
				return posts[id];
			},
			save: function(post_data) {
				posts.push(post_data);

				return posts;
			},
			destroy: function(id) {
				posts.splice(id, 1);

				return posts;
			}
		}
	})
})();