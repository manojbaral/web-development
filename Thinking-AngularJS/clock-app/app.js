/**
 * Created by mbara3 on 10/5/16.
 */



//Creating new module
var app=angular.module("clockApp",[]);

//register the controller
app.controller("TimeCtrl",TimeCtrl);

//implements the logic behind the scene
function TimeCtrl($scope) {

    //creating new object
    var currentDate=new Date();

    //getting API from javascript object
    $scope.timeString=currentDate.toTimeString();
    $scope.updateTime=function () {
        $scope.userName="";

        //UPDATE TIME
        var currentDate=new Date();
        $scope.timeString=currentDate.toTimeString();

    }
}


