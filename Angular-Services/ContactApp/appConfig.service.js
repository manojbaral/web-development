/**
 * Created by mbara3 on 10/27/16.
 */

(function () {
    var app = angular.module("ContactApp");

//java script excute the AppConfig in constructor mode
//when using servie it instanitated with new keyboard and
//add properities to "this"
app.service("AppDataServiceSvc", function(AppNameSvc){
    this.name=AppNameSvc;
    this.author="Manoj";
    this.buildDate=new Date().toDateString();
});
})();