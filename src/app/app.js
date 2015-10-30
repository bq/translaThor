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
    'ngRoute',
    'ngSanitize',
    'ngStorage'
  ]).config(['$provide', '$routeProvider', function($provide, $routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/landing/landing.html',
        controller: 'LandingControler'
      })
      .when('/main', {
        templateUrl: 'app/main/main.html',
        controller: 'MainControler'
      })
      .when('/404', {
        templateUrl: '404.html'
      })
      .otherwise({
        redirectTo: '/404'
      });
  }])
  .run(function() {
    // Make sure _ is invoked at runtime. This does nothing but force the "_" to
    // be loaded after bootstrap. This is done so the "_" factory has a chance to
    // "erase" the global reference to the lodash library.
    // ...
  });
