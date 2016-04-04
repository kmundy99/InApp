'use strict';

/* Controllers */

var integrationControllers = angular.module('integrationControllers', []);

integrationControllers.controller('appListCtrl', ['$scope', '$http',
  function($scope, $http) {
   $http.get('apps/apps.json').success(function(data) { 
	$scope.apps = data;
    }); 

    $scope.orderProp = 'lastUpdatedDate';
  }]);

integrationControllers.controller('appDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('apps/$routeParams.appId.json').success(function(data) {
	  $scope.apps_detail = data; });
  }]);
