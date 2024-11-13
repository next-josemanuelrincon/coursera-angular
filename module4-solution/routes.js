(()=>{
'use strict';    
angular.module('MenuApp')
.config(Routes)

Routes.$inject = ['$stateProvider', '$urlRouterProvider'];
function Routes($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home',
    {
        url: '/',
        templateUrl: 'templates/home.template.html'
    })
    .state('categories',
    {
        url: '/categories',
        templateUrl: 'templates/categories.template.html',
        controller: 'CategoryController as category',
        resolve:{
            categories:['MenuDataService',
                (MenuDataService)=>{
                    return MenuDataService.getAllCategories()
                }
            ]
        }
    })
    .state('items',
    {
        url: '/items/{categoryId}',
        templateUrl: 'templates/items.template.html',
        controller: 'ItemsController as itemDetail',
        resolve:{
            itemDetails:['$stateParams','MenuDataService',
                ($stateParams,MenuDataService)=>{
                    return MenuDataService.getItemsForCategory($stateParams.categoryId)
                }
            ]
        }
    });
};

})();