(()=>{
    "use strict";
    
    angular.module('public')
    .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject=['UserInfo']
    function MyInfoController(UserInfo){
        let myInfoCtrl = this;
        myInfoCtrl.show = UserInfo.firstName ? false : true
        myInfoCtrl.firstname = UserInfo.firstName
        myInfoCtrl.lastname = UserInfo.lastName
        myInfoCtrl.email = UserInfo.email
        myInfoCtrl.dish = UserInfo.favDish
        myInfoCtrl.dishTitle = myInfoCtrl.dish ?  myInfoCtrl.dish.split('-')[1].trim() : ""
        myInfoCtrl.dishCategory= myInfoCtrl.dish ? myInfoCtrl.dish.split('-')[0].split('')[0].trim() : ""
        myInfoCtrl.dishImage = myInfoCtrl.dish ? myInfoCtrl.dish.split('-')[0].trim() : ""


    };
})();