(()=>{
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('toBuyController',toBuyController)
.controller('alreadyBoughtController',alreadyBoughtController)
.service('shoppingListCheckOffService',shoppingListCheckOffService)

toBuyController.$inject=['shoppingListCheckOffService'];

function toBuyController (shoppingListCheckOffService){
    let toBuy=this;
    
    toBuy.toBuyList = [
        {name:'carrots', quantity: 1},
        {name:'apples', quantity: 1},
        {name:'onions', quantity: 1},
        {name:'apricots', quantity: 1},
        {name:'peas', quantity: 1},
        {name:'lettuces', quantity: 1},
        {name:'cookies', quantity: 1},
        {name:'coffe', quantity: 1}
    ];
    
    toBuy.buy = (itemIndex)=>{
        shoppingListCheckOffService.add(toBuy.toBuyList[itemIndex])
        toBuy.toBuyList.splice(itemIndex,1)
    };

    toBuy.empty = ()=>{
        return (toBuy.toBuyList.length <= 0) ? true : false;
    };
}

alreadyBoughtController.$inject=['shoppingListCheckOffService'];

function alreadyBoughtController (shoppingListCheckOffService){
    let alreadyBought = this;

    alreadyBought.boughtList= shoppingListCheckOffService.get();

    alreadyBought.empty = ()=>{
        return (alreadyBought.boughtList.length <= 0) ? true : false;
    };
    
}

function shoppingListCheckOffService (){
   let service = this;
   let boughtList=[];

   service.add = (item)=>{
    boughtList.push(item);
   };

   service.get = ()=>{
    return boughtList;
   };
}

})();