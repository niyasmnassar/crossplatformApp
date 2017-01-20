var app = angular.module("myApp", []);

app.controller('myCtrl', ['$scope', function($scope){

   $scope.productAttributes = {
        "CostRequirements":[
            {
                "OriginPostcode": '',
                "Email":'',
                "Phone":'',
                "Subject":'',
                "Message":'',
                "BearerSize":100

            }
        ]
    }
    $scope.myObject = ({ // ties to the model
        sitePostcode : $scope.productAttributes.CostRequirements[0].OriginPostcode,
        email : $scope.productAttributes.CostRequirements[0].Email,
        email : $scope.productAttributes.CostRequirements[0].Phone,
        email : $scope.productAttributes.CostRequirements[0].Subject,
        email : $scope.productAttributes.CostRequirements[0].Message    
    }); 
    
    $scope.updateThingy = function(){
        $scope.productAttributes.CostRequirements[0].OriginPostcode = $scope.myObject.sitePostcode,
        $scope.productAttributes.CostRequirements[0].Email = $scope.myObject.email,
        $scope.productAttributes.CostRequirements[0].Phone = $scope.myObject.phone,
        $scope.productAttributes.CostRequirements[0].Subject = $scope.myObject.subject,
        $scope.productAttributes.CostRequirements[0].Message = $scope.myObject.message
    };

}]); 