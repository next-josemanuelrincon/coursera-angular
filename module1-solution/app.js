(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope){
  $scope.input=""
  $scope.check = ()=>{
    let dishes = CountDishes($scope.input.split(','));
    if (dishes == 0){
      $scope.msg="Please enter data first"
      $scope.color="text-danger"
    }else if(dishes <= 3){
      $scope.msg="Enjoy!"
      $scope.color="text-success"
    }else{
      $scope.msg="Too much!"
      $scope.color="text-warning"
    }
  }
  
};

let CountDishes = (str)=>{
  let count = 0
  for (let i = 0 ; i < str.length; i++){
    if (str[i].trim() != ""){
      count++
    }
  }
  return count
}

})();
