/**
 * Created by mbara3 on 10/5/16.
 */

//creating new angular module
var app=angular.module("calculatorApp",[]);

//register the controller
app.controller("CalculatorCtrl",CalculatorCtrl);

//main function to render the calculator app
function CalculatorCtrl() {
    this.resultValue=0;
    this.buttonClicked=function (button) {
        this.selectedOperation=button;


    };

    this.computeResult=function () {

        //parseFloat return the string and parse the floating number
        var number1=parseFloat(this.input1);
        var number2=parseFloat(this.input2);

        if (this.selectedOperation ==='+'){
            this.resultValue=number1 + number2;
        }

        else if (this.selectedOperation ==='-'){
            this.resultValue=number1 - number2;
        }

        else if (this.selectedOperation ==='*'){
            this.resultValue=number1 * number2;
        }

        else if (this.selectedOperation ==='/'){
            this.resultValue=number1 / number2;
        }

    }


}
