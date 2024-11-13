(()=>{
'use strict';

angular.module('narrowItDownApp', [])
.controller('narrowItDownController',narrowItDownController)
.service('menuSearchService',menuSearchService)
.directive('foundItems',foundItemsDirective)
.constant('apiBase','https://coursera-jhu-default-rtdb.firebaseio.com')

narrowItDownController.$inject=['menuSearchService'];
function narrowItDownController(menuSearchService){
    let narrow = this
    narrow.searchTerm = ""
    
    narrow.click = ()=>{
       let promise = menuSearchService.getMatchedMenuItems(narrow.searchTerm)
        promise.then((response)=>{
            narrow.items=response
        }).catch((error)=>{
            console.log(error)
        });
    };
    narrow.remove = (index)=>{
        narrow.items.splice(index,1)
    }
};

menuSearchService.$inject=['$http','apiBase','$filter']
function menuSearchService($http,apiBase,$filter){
    let service = this
    service.getMatchedMenuItems = (searchTerm)=>{
        let descriptionList = []
        return $http({
            url: apiBase + '/menu_items.json'
        }).then((response)=>{
            let menu = response.data
            for(let category in menu){
                let match = menu[category].menu_items.filter((item)=>{
                        return item.description.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1
                });
                if (match.length > 0){
                    for(let index=0;index< match.length;index++){
                        descriptionList.push(match[index])
                    }
                }
            }
            return descriptionList
        }).catch((error)=>console.log(error))
    }
};

function foundItemsDirective()
{
    let ddo = { 
        templateUrl: "foundItems.html",
        scope: {
            listItems : '<',
            onRemove : '&'
        }
    };
    
    return ddo;
}


})();