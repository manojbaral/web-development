/**
 * Created by mbara3 on 10/27/16.
 */

//Main function to render the contact-app
(function () {
    var app = angular.module("ContactApp");
    app.controller("ContactCtrl",ContactCtrl);

    function ContactCtrl(ContactDataSvc) {
       var self=this;
        self.editMode=false;
        self.addMode=false;
        ContactDataSvc.getContacts()
        .then(function(data) {
            self.contacts=data;

        });

        //this.selectedContact = this.contacts[5];

        this.selectContact = function (index) {
            this.selectedContact = this.contacts[index];
            self.successMessage= undefined;
            self.errorMessage=undefined;

        };

        //method for edit mode
        this.toggleEditMode=function () {
            this.editMode=! this.editMode;

        };

        //method for save mode in page
        this.saveUser=function () {
            this.toggleEditMode();
            var userData = this.selectedContact;
            if (self.addMode) {
                ContactDataSvc.createUser(userData)
                    .then(function () {
                            self.successMessage = "Data successfully updated";
                        },
                        function () {
                            self.errorMessage = "There was an error.Please try again";


                        }
                    )
                self.addMode=false;

            }

            else {
                ContactDataSvc.saveUser(userData)
                    .then(function () {
                            self.successMessage = "Data successfully updated";
                        },
                        function () {
                            self.errorMessage = "There was an error.Please try again";


                        }
                    )

            }
        };

        //add new contact
        this.addContact=function () {
            this.addMode=true;
            this.selectedContact={
                "id":new Date().toTimeString()
            };
            this.editMode=true;

        }
    }
})();