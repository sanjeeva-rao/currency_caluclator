app.controller("myController",function($scope){
    $scope.Currency=[
        {currencyName:"INR",symbol:"₹"},
        {currencyName:"USD",symbol:"$"},
        {currencyName:"BRITISH POUND",symbol:"£"},
        {currencyName:"AUS DOLLER",symbol:"$"},
    ];

    $scope.convert=function(){
        //console.log($scope.currency1,$scope.currency2)
        $scope.resultsymbol=$scope.Currency.filter((each)=>{
            if(each.currencyName===$scope.currency2){
                return each.symbol;
            }
        });
        //console.log($scope.resultsymbol);




        //let result=document.querySelector(".result")
        if($scope.currency1==="INR" & $scope.currency2==="USD"){
            $scope.output=$scope.ipcurrency*0.012512
        }
        else if($scope.currency1==="INR" & $scope.currency2==="BRITISH POUND"){
            $scope.output=($scope.ipcurrency*0.011032)
        }
        else if($scope.currency1==="INR" & $scope.currency2==="AUS DOLLER"){
            $scope.output=($scope.ipcurrency*0.018793)
        }
        else if($scope.currency1=== "USD"& $scope.currency2==="INR"){
            $scope.output=($scope.ipcurrency*79.923)
        }
        else if($scope.currency1=== "BRITISH POUND"& $scope.currency2==="INR"){
            $scope.output=($scope.ipcurrency*90.64)
        }
        else if($scope.currency1=== "AUS DOLLER"& $scope.currency2==="INR"){
            $scope.output=($scope.ipcurrency*53.211)
        }
        else if($scope.currency1=== "USD"& $scope.currency2==="BRITISH POUND"){
            $scope.output=($scope.ipcurrency*0.88)
        }
        else if($scope.currency1=== "USD"& $scope.currency2==="AUS DOLLER"){
            $scope.output=($scope.ipcurrency*1.50)
        }
        else if($scope.currency1=== "AUS DOLLER"& $scope.currency2==="USD"){
            $scope.output=($scope.ipcurrency*0.67)
        }
        else if($scope.currency1=== "BRITISH POUND"& $scope.currency2==="USD"){
            $scope.output=($scope.ipcurrency*1.13)
        }
        else if($scope.currency1=== "AUS DOLLER"& $scope.currency2==="BRITISH POUND"){
            $scope.output=($scope.ipcurrency*0.59)
        }
        else if($scope.currency1=== "BRITISH POUND"& $scope.currency2==="AUS DOLLER"){
            $scope.output=($scope.ipcurrency*1.70)
        }
        else if(($scope.currency1=== "INR"& $scope.currency2==="INR")|($scope.currency1=== "USD"& $scope.currency2==="USD")
        |($scope.currency1=== "BRITISH POUND"& $scope.currency2==="BRITISH POUND")|($scope.currency1=== "AUS DOLLER"& $scope.currency2==="AUS DOLLER")
        ){
            $scope.output=($scope.ipcurrency)
        }
        
        
        
    }

})