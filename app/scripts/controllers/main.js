'use strict';

/**
 * @ngdoc function
 * @name generatorAngularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the generatorAngularTestApp
 */
angular.module('generatorAngularTestApp')
  .controller('MainCtrl', function ($scope, masterDataPopulator) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

$scope.mlist = masterDataPopulator.getDistricts();

// $scope.blist = function(districtName) {
//   return masterDataPopulator.getBlocksForDistrict(districtName);
// };


$scope.updateblocks = function(districtName) {
  $scope.blist = masterDataPopulator.getBlocksForDistrict(districtName);
};
    console.log($scope.mlist);
  });
