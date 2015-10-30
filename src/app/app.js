/*jshint camelcase: false */
/*jshint unused: false */
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
  .module('bitbloqApp', [
    'ngAria',
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'ngStorage',
    'ngMessages',
    'ngResource',
    'ui.router'
  ]).config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html'
      })
      .state('main', {
        url: '/posi',
        templateUrl: 'app/main/poosi.html'
      });
  }])
  .run(function() {
    // Make sure _ is invoked at runtime. This does nothing but force the "_" to
    // be loaded after bootstrap. This is done so the "_" factory has a chance to
    // "erase" the global reference to the lodash library.
    // ...
  });