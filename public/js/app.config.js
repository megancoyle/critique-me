angular.module('critique')
.config([
    '$stateProvider',
    '$locationProvider',
    '$urlRouterProvider',
    function ($stateProvider, $locationProvider, $urlRouterProvider) {

        //load all posts before home state finishes loading
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html',
                controller: 'MainCtrl',
                resolve: {
                    postPromise: ['posts', function (posts) {
                            return posts.getAll();
                  }]
                }
            })
            .state('welcomeIndex', {
                url: '',
                templateUrl: 'templates/index.html'
            })
            .state('posts', {
                url: '/posts/:id',
                templateUrl: 'templates/posts.html',
                controller: 'PostsCtrl',
                resolve: {
                post: ['$stateParams', 'posts', function ($stateParams, posts) {
                    return posts.get($stateParams.id);
            }]
        }
    });
    $urlRouterProvider.otherwise('home');
}]);
