(function(){

angular
	.module('myapp')
	.factory('servis', servis);
servis.$inject = ['$http'];

function servis($http){
	return{
//        nekaimena: nekaimena,
    getPod: getPod,
        getPodPratioci: getPodPratioci
};
//	function nekaimena(username){
//	return $http.get("https://api.github.com/users/"+username).  .then(getImena).catch(getNoImena);
//            
//            function getImena(response){
//                return response;
//            }
//            
//            function getNoImena(response){
//                return response;
//            };
//}
//}
    function getPod(username){
    return $http.get("https://api.github.com/users/"+username).then(getImena).catch(getNoImena);
            
            function getImena(response){
                return response;
            }
            function getNoImena(response){
                 console.log("nema tog kretena")
                return response;
            };
}
    function getPodPratioci(followers){
        return $http.get(followers).then(getImena).catch(getNoImena);
            
            function getImena(response){
                return response;
            }
            function getNoImena(response){
               
                return response;
            };
        
        
    }
}
})();
