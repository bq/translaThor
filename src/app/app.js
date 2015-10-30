(function() {
  'use strict';
  /**
   * @ngdoc overview
   * @name translaThor
   * @description
   * # translaThor
   *
   * Main module of the application.
   */

  angular
    .module('translaThorApp', [
      'ngAria',
      'ngCookies',
      'ngSanitize',
      'ui.router'
    ]).config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/404');
      $stateProvider
        .state('landing', {
          url: '/',
          templateUrl: 'app/landing/landing.html',
          controller: 'LandingController',
          controllerAs: 'main'
        })
        .state('home', {
          url: '/main',
          templateUrl: 'app/main/main.html',
          controller: 'MainController',
          controllerAs: 'main'
        })
        .state('404', {
          template: '<div>error</div>',
        });
    })
    .run(function() {});
})();