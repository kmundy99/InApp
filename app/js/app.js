'use strict';

/* App Module */

var integrationApp = angular.module('integrationApp', [
  'ngRoute',
  'integrationControllers'
]);

integrationApp.config(
  function($routeProvider) {
    $routeProvider.when('/app', {
        templateUrl: 'partials/app-list.html',
        controller: 'appListCtrl'
      }).when('/app/:appId', {
        templateUrl: 'partials/app-detail.html',
        controller: 'appDetailCtrl'
      }).otherwise({
        redirectTo: '/app'
      });
  });
