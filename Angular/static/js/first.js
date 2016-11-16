/**
 * Created by mbara3 on 10/3/16.
 */

var firstApp=angular.module('firstApp', []);
firstApp.controller('FirstController',function ($scope) {

    $scope.first='Some';
    $scope.last='One';
    $scope.heading='Message';
    $scope.updateMessage= function () {

        $scope.message= 'hello' + $scope.first + ' '+ $scope.last + '!';

    };
});
