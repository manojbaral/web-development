/**
 * Created by mbara3 on 10/6/16.
 */

//creating new angular module
var app=angular.module("todoApp",[]);

//register the controller
app.controller("TodoCtrl",TodoCtrl);

//main function which is created by controller
function TodoCtrl() {

    //by default it is false
    this.editMode=false;
    this.todos=[
        "Learn Angular js",
        "Try out the exercise",
        "Visit Stackoverflow or ask question if you have any problem while coding"
    ];

    this.addNewTodo=function () {
        this.todos.push(this.newTodo);
        this.newTodo="";

    };

    this.triggerEditMode=function () {
        this.editMode=!this.editMode;

    };
    
    this.deleteTodo=function (index) {
        this.todos.splice(index,1);
        
    }
}
