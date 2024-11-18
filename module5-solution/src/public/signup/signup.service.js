(function () {
    "use strict";

    angular.module('common')
        .service('RegistrationService', RegistrationService);

    function RegistrationService() {
        var service = this;
        var thisUser = {};

        service.setUser = function (user) {
            thisUser.firstName = user.firstname;
            thisUser.lastName = user.lastname;
            thisUser.email = user.email;
            thisUser.favDish = user.menu;
            console.log(thisUser)
        };

        service.getUser = function () {
            return thisUser;
        }
    }

})();