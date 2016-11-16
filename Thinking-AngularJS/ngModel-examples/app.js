/**
 * Created by mbara3 on 10/5/16.
 */

var app=angular.module("ngModelExamples",[]);

app.controller("ExampleCtrl",ExampleCtrl);

function ExampleCtrl($scope) {
    $scope.textboxChange=function () {
        console.log("Textbox value changed");

    }

}
