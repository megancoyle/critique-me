angular.module('critique').controller('MainCtrl', ['$scope', 'posts',
function ($scope, posts) {
    $scope.posts = posts.posts;

    //set title to blank to prevent empty posts
    $scope.title = '';
    $scope.addPost = function () {
        if ($scope.title.length === 0) {
           alert('Title is required');
            return;
        }
      //check for valid URL
      var isValidUrl = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.‌​\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[‌​6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1‌​,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00‌​a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u‌​00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;

      var url = $scope.link;
      var artist = $scope.artist;
      var yearMade = $scope.yearMade;
      var imageUrl = $scope.imageUrl;
      var details = $scope.details;

      if($scope.link && !isValidUrl.test(url)) {
        alert('You must include a valid url (ex: http://www.example.com');
          return;
      }
        posts.create({
            title: $scope.title,
            link: $scope.link,
            artist: $scope.artist,
            yearMade: $scope.yearMade,
            imageUrl: $scope.imageUrl,
            details: $scope.details

        });
        //clear the values
        $scope.title = '';
        $scope.link = '';
        $scope.artist = '';
        $scope.yearMade = '';
        $scope.imageUrl = '';
        $scope.details = '';
    };

    $scope.deletePost = function(post) {
      posts.delete(post);
    }

    $scope.upvote = function (post) {
        //calling the upvote() function and passing in post
        posts.upvote(post);
    };
    $scope.downvote = function (post) {
      posts.downvote(post);
    };
}])
