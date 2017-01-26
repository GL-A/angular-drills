angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './views/home.html'
  })
  .state('sign', {
    url: '/signup',
    templateUrl: 'views/signup.html'
  })
  .state('details', {
    url: '/details',
    templateUrl: 'views/details.html',
    controller: 'ctrl'
  })

})
