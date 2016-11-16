/**
 * Created by mbara3 on 10/27/16.
 */

(function () {
    var app = angular.module("ContactApp");

//java script excute the AppConfig in constructor mode
//when using servie it instanitated with new keyboard and
//add properities to "this"
    app.service("ContactDataSvc", function ($http) {

        var self = this;
        self.getContacts = function () {
            var promise1 = $http.get('http://localhost:3000/contacts');
            var promise2 = promise1.then(function (res) {
                return res.data;
            });
            return promise2;

        }
        self.saveUser=function (userData) {
            return $http.put('http://localhost:3000/contacts/' + userData.id,userData)
            .then(function (res) {
                console.log(res);

            });

        }
        self.createUser=function (userData) {
            return $http.post('http://localhost:3000/contacts/',userData)
                .then(function (res) {
                    console.log(res);

                });

        }

    });
})();
