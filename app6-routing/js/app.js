angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/home.html',

    })
    .state('signup', {
      url: '/js/signup',
      templateUrl: 'views/signup.html',
      controller: 'signupCtrl'

    })
    .state('details', {
      url: '/js/details',
      templateUrl: 'views/details.html',
      controller: 'detailsCtrl'

    })

  $urlRouterProvider.otherwise('/');
})
