angular.module('critique').factory('posts', ['$http', function ($http) {
    var o = {
        posts: []
    };
    // query the '/posts' route and bind a function when request returns
    o.getAll = function () {
        return $http.get('/posts')
          .success(function (data) {
            angular.copy(data, o.posts);
        });
    };
    // when $http gets success, it adds this post to the posts object in local factory
    o.create = function (post) {
        return $http.post('/posts', post)
          .success(function (data) {
            o.posts.push(data);
        });
    };

    o.update = function(post) {
      return $http.put('/posts/' + post._id, post)
        .success(function (data) {
          console.log('update successful', data);
          return data;
        })
    };

    o.upvote = function (post) {
      //use express route for this post's id to add upvote to mongo model
        return $http.put('/posts/' + post._id + '/upvote')
                .success(function (data) {
                    post.votes += 1;
                });
    };

    o.downvote = function (post) {
      return $http.put('/posts/' + post._id + '/downvote')
        .success(function(data) {
          post.votes -= 1;
        });
    };

    // grab a single post from server
    o.get = function (id) {
        return $http.get('/posts/' + id)
          .then(function (res) {
            return res.data;
        });
    };
    o.delete = function(post) {
      return $http.delete('/posts/' + post._id).success(function(data){
        angular.copy(data, o.posts);
      });
    }
    o.addComment = function (id, comment) {
        return $http.post('/posts/' + id + '/comments', comment);
    };
    // o.deleteComment = function (id, comment) {
    //     return $http.delete('/posts/' + id + '/comments', comment).success(function(data){
    //       angular.copy(data, o.comments)
    //     });
    // };

    o.upvoteComment = function (post, comment) {
        return $http.put('/posts/' + post._id + '/comments/' + comment._id + '/upvote')
                .success(function (data) {
                    comment.votes += 1;
                });
    };

    o.downvoteComment = function (post, comment) {
      return $http.put('/posts/' + post._id + '/comments/' + comment._id + '/downvote')
        .success(function (data) {
          comment.votes -= 1;
        });
    };
    return o;
}]);
