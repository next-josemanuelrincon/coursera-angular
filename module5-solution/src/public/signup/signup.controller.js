(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController);
    
    SignUpController.$inject = ['$scope','menuItems','menuCategories','RegistrationService'];
    function SignUpController($scope,menuItems,menuCategories,RegistrationService) {
        let signUpCrtl = this;

        //MENU
        signUpCrtl.menuCategories = menuCategories
        signUpCrtl.menuItems = prepareMenuItems(menuItems)
        
        //FORM
        signUpCrtl.submit=()=>{
            RegistrationService.setUser($scope.reg.user)
        };
    };
    
    let prepareMenuItems = (menuItems)=>{
        let menuItemsDesglosed = []
        for(let menu in menuItems){
            let menuItem = menuItems[menu].menu_items
            for (let item in menuItem){
                menuItemsDesglosed.push(menuItem[item].short_name+' - '+menuItem[item].name )
            }
        }
        return menuItemsDesglosed
    };

    })();