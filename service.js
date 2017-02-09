(function(){

angular
	.module('myapp')
	.factory('servis', servis);
servis.$inject = ['$http'];

function servis($http){
	return{
//        nekaimena: nekaimena,
    getGitUserByUsername: getGitUserByUsername,
        getGitFollower: getGitFollower
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
    function getGitUserByUsername(username){
    return $http.get("https://api.github.com/users/"+username).then(getImena).catch(getNoImena);
            
            function getImena(response){
                return response;
            }
            function getNoImena(response){
                return response;
            };
}
    function getGitFollower(followers){
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
