(()=>{
'use strict';

angular.module('MenuApp')
.controller('CategoryController',CategoryController)
.controller('ItemsController',ItemsController);

CategoryController.$inject=['categories'];
function CategoryController(categories){
    let category = this;
    category.data = categories
};

ItemsController.$inject=['itemDetails'];
function ItemsController(itemDetails){
    let itemDetail = this;
    itemDetail.data=itemDetails
};

})();