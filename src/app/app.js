angular.module('ngslush', [
  'ngRoute',
  'AcmeBundle'
])
  .config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .otherwise({
      redirectTo: '/acme'
    });
});