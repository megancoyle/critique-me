angular.module('critique').controller('PostsCtrl', [
'$scope',
'posts',
'post',
function ($scope, posts, post) {
    $scope.post = post;

    $scope.addComment = function () {
        if ($scope.body.length === 0) {
          alert('Content is required');
           return;
        }

        posts.addComment(post._id, {
            body: $scope.body,
            author: 'user'
        }).success(function (comment) {
            $scope.post.comments.push(comment);
        });
        $scope.body = '';
    };

    $scope.deleteComment = function(comment) {
      posts.deleteComment(post, comment)
    }

    $scope.updatePost = function(post) {
      posts.update(post);
    }

    $scope.deletePost = function(post) {
      posts.delete(post);
    }

    $scope.upvote = function (comment) {
        posts.upvoteComment(post, comment);
    };

    $scope.downvote = function (comment) {
        posts.downvoteComment(post, comment);
    };

}]);
