angular.module('app', ['ui-router'])
.config(function($stateProvider, $urlProvider){

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'homeCtrl'
    })
    .state('signup', {
      url: '/js/signup',
      templateUrl: 'views/signup.html',
      controller:'signupCtrl'
    })
    .state('details', {
      url: '/js/details',
      templateUrl: 'views/details.html',
      controller: 'detailsCtrl'
    })

  $urlRouterProvider
    .otherwise('/');
})
