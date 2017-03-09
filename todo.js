var app = angular.module('myApp',['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl:'todo1.html'
    });
    
});

app.controller('loginCtrl',function($scope)
{   
    $scope.product=[];
    
    
  
    $scope.addItem = function () {
       var ob={

          'text':$scope.addMe,
          'status':"Pending",


    }; 
    var index =-1;  
     for(var i=0;i<$scope.product.length;i++)

     {
              if($scope.product[i].text==$scope.addMe)
              {
                index=i;
                break;

              }

     }        
            if(index==-1)
              {
                $scope.product.push(ob);
                $scope.addMe="";
              }

            else
            {
                alert("Cannot Enter Same Data");

            }

    }

    
    
     $scope.removeItem = function (x) {
      
        $scope.product.splice(x, 1);
    }
     
    
      $scope.check=function(x)
      {
          x.status="Done";

      }
   
});
