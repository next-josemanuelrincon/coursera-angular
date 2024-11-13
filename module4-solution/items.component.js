(()=>{
'use strict';
    
angular.module('MenuApp')
.component('items',
    {
        templateUrl: 'templates/itemlist.template.html',
        bindings: {
            items: '<'
        }
    });

})();