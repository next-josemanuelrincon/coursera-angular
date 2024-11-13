(()=>{
'use strict';    
angular.module('Data')
.service('MenuDataService',MenuDataService);

MenuDataService.$inject=['$http','ApiBase']
function MenuDataService($http,ApiBase){
    let service = this

    service.getAllCategories =()=>{
        return $http({
             url: ApiBase + '/categories.json'
        }).then((response)=>{
            return response.data
        }).catch((error)=>{
            console.log(error)
        });
    };

    service.getItemsForCategory = (categoryShortName)=>{
        return $http({
            url: ApiBase +'/menu_items/'+categoryShortName+'.json'
       }).then((response)=>{
           return response.data.menu_items
       }).catch((error)=>{
           console.log(error)
       });
    };
};

})();