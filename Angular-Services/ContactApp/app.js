/**
 * Created by mbara3 on 10/24/16.
 */

//Creating new Angular Module
var app = angular.module("ContactApp", []);

//Register the controller
//app.controller("ContactCtrl", ContactCtrl);

//Header and footer controller
// app.controller("HeaderCtrl", HeaderCtrl);
// app.controller("FooterCtrl", FooterCtrl);

// app.value("AppNameSvc","New Contact App");

/*
factory function for prepared app
when using factory you create a object add properities
to it and then return the same object
*/

//Factory function
// function prepareAppConfig(AppNameSvc) {
//
//     //instinate the object
//     var value={};
//
//     value.name=AppNameSvc;
//     value.author="Manoj";
//     value.buildDate=new Date().toDateString();
//
// //return the object
//     return value;
//
// }

//service method
//constuctor mode function
// //Service function
//  function AppConfig(AppNameSvc) {
//      this.name=AppNameSvc;
//      this.author="Manoj";
//      this.buildDate=new Date().toDateString();
//
//
//  }



// //register the value
// app.value("AppDataSvc",prepareAppConfig)();
// //     "name": "Contact App",
// //     "author": "Manoj",
// //     "company": "somwhere",
// //     version: 1
// // });
//
// app.value("LoggingSvc", function () {
//     console.log("Hello");
//
// });

//creating factory service that came up with anguar api
//app.factory("AppDataFactorySvc",prepareAppConfig); //prepareAppConfig();

//java script excute the AppConfig in constructor mode
//when using servie it instanitated with new keyboard and
//add properities to "this"
//app.service("AppDataServiceSvc",AppConfig); //new AppConfig();

// //Main function to render the contact-app
// function ContactCtrl() {
//     this.contacts = [
//         {
//             "gender": "male",
//             "name": {"title": "mr", "first": "thomas", "last": "bishop"},
//             "location": {"street": "2018 strand road", "city": "balbriggan", "state": "longford", "postcode": 69006},
//             "email": "thomas.bishop@example.com",
//             "login": {
//                 "username": "bigsnake548",
//                 "password": "11235813",
//                 "salt": "KevZp1x6",
//                 "md5": "dfa428cdc6b19b3dee3759f7677199d6",
//                 "sha1": "4cad4356cf7c8a334373c52a49a6691865ac74bb",
//                 "sha256": "bd513b4ff06e34f6f7cb1d67a03752cd28b402c001b2d323120bc1a753ccc362"
//             },
//             "dob": "1981-05-18 16:51:04",
//             "registered": "2012-05-18 17:10:30",
//             "phone": "061-894-6619",
//             "cell": "081-674-5105",
//             "id": {"name": "PPS", "value": "2775878T"},
//             "picture": {
//                 "large": "https://randomuser.me/api/portraits/men/51.jpg",
//                 "medium": "https://randomuser.me/api/portraits/med/men/51.jpg",
//                 "thumbnail": "https://randomuser.me/api/portraits/thumb/men/51.jpg"
//             },
//             "nat": "IE"
//         }, {
//             "gender": "female",
//             "name": {"title": "miss", "first": "bérénice", "last": "caron"},
//             "location": {
//                 "street": "6671 boulevard de la duchère",
//                 "city": "toulouse",
//                 "state": "jura",
//                 "postcode": 52943
//             },
//             "email": "bérénice.caron@example.com",
//             "login": {
//                 "username": "purplerabbit354",
//                 "password": "zouzou",
//                 "salt": "6a5Va3Hs",
//                 "md5": "595ebccfd7ec70d95410f7c5c7ae02d9",
//                 "sha1": "852b77bd6c3087efec1033c02201e6b8487234f8",
//                 "sha256": "086f21f92fb63d4453af03be8756f54bfe06bf5f140761ca93e7134d7a056b3c"
//             },
//             "dob": "1978-09-20 18:08:26",
//             "registered": "2015-02-04 22:29:20",
//             "phone": "05-74-91-10-76",
//             "cell": "06-80-84-00-41",
//             "id": {"name": "INSEE", "value": "278889450147 76"},
//             "picture": {
//                 "large": "https://randomuser.me/api/portraits/women/72.jpg",
//                 "medium": "https://randomuser.me/api/portraits/med/women/72.jpg",
//                 "thumbnail": "https://randomuser.me/api/portraits/thumb/women/72.jpg"
//             },
//             "nat": "FR"
//         }, {
//             "gender": "female",
//             "name": {"title": "mrs", "first": "paula", "last": "duran"},
//             "location": {
//                 "street": "4229 avenida de américa",
//                 "city": "alcalá de henares",
//                 "state": "país vasco",
//                 "postcode": 95184
//             },
//             "email": "paula.duran@example.com",
//             "login": {
//                 "username": "heavyduck608",
//                 "password": "zuan",
//                 "salt": "ODO0p4OE",
//                 "md5": "c25c2ad1261b4a22124b75fb699ec3b1",
//                 "sha1": "7915697d9b87e3bf522b9e88ceda4be17a9d875e",
//                 "sha256": "a85f5ca5b4c0737d003c4c6e5bf6d15a88e0a2211ec86627cf9a9ffce6110cc5"
//             },
//             "dob": "1994-05-08 21:07:37",
//             "registered": "2014-09-20 12:17:17",
//             "phone": "947-936-388",
//             "cell": "686-889-665",
//             "id": {"name": "DNI", "value": "72222745-F"},
//             "picture": {
//                 "large": "https://randomuser.me/api/portraits/women/2.jpg",
//                 "medium": "https://randomuser.me/api/portraits/med/women/2.jpg",
//                 "thumbnail": "https://randomuser.me/api/portraits/thumb/women/2.jpg"
//             },
//             "nat": "ES"
//         }, {
//             "gender": "male",
//             "name": {"title": "mr", "first": "maurice", "last": "bates"},
//             "location": {"street": "5026 hillcrest rd", "city": "victorville", "state": "virginia", "postcode": 54308},
//             "email": "maurice.bates@example.com",
//             "login": {
//                 "username": "organicbutterfly156",
//                 "password": "lesbens",
//                 "salt": "pWnRmnVY",
//                 "md5": "d7ea224d6fb90629b82c35ec20f54239",
//                 "sha1": "da0465f9e0ee8f545ddda5eacadea198174c43e7",
//                 "sha256": "f3e3b937fbc80a0c7182a197b5b393a8ba16d1fd413521b1f26ea82db1acf5af"
//             },
//             "dob": "1946-05-27 01:11:23",
//             "registered": "2012-12-14 01:47:30",
//             "phone": "(572)-945-6080",
//             "cell": "(830)-827-8016",
//             "id": {"name": "SSN", "value": "204-48-1468"},
//             "picture": {
//                 "large": "https://randomuser.me/api/portraits/men/24.jpg",
//                 "medium": "https://randomuser.me/api/portraits/med/men/24.jpg",
//                 "thumbnail": "https://randomuser.me/api/portraits/thumb/men/24.jpg"
//             },
//             "nat": "US"
//         }, {
//             "gender": "female",
//             "name": {"title": "miss", "first": "line", "last": "rezende"},
//             "location": {
//                 "street": "3512 avenida da legalidade",
//                 "city": "santa rita",
//                 "state": "distrito federal",
//                 "postcode": 26470
//             },
//             "email": "line.rezende@example.com",
//             "login": {
//                 "username": "orangekoala820",
//                 "password": "josephin",
//                 "salt": "7K0Ev1sD",
//                 "md5": "e94e10bd4327d95cb05881c1d0bbc9e4",
//                 "sha1": "f703b57eb80514748be4a9531ef0ed711248f262",
//                 "sha256": "991a90f33661b4ce90a0d983afea66510ab295352c1cb5209abb0661f6afa42d"
//             },
//             "dob": "1970-08-20 21:41:22",
//             "registered": "2009-03-05 03:12:57",
//             "phone": "(43) 5399-6652",
//             "cell": "(15) 4153-3876",
//             "id": {"name": "", "value": null},
//             "picture": {
//                 "large": "https://randomuser.me/api/portraits/women/11.jpg",
//                 "medium": "https://randomuser.me/api/portraits/med/women/11.jpg",
//                 "thumbnail": "https://randomuser.me/api/portraits/thumb/women/11.jpg"
//             },
//             "nat": "BR"
//         }
//     ];
//
//     this.selectedContact = this.contacts[4];
//
//     this.selectContact = function (index) {
//         this.selectedContact = this.contacts[index];
//
//     }
// }

//function header controller
// function HeaderCtrl( AppDataFactorySvc) {
//     this.appTitle = AppDataFactorySvc.name;
//     this.buildDate=AppDataFactorySvc.buildDate;
//
//
// }
//
// // //function footer controller
// function FooterCtrl(AppDataFactorySvc) {
//     this.appTitle = AppDataFactorySvc.name;
//     this.buildDate=AppDataFactorySvc.buildDate;
//}











