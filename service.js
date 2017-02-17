(function(){

angular
	.module('myapp')
	.factory('servis', servis);
servis.$inject = ['$http'];

function servis($http){
	return{
//        nekaimena: nekaimena,
    getGitUserByUsername: getGitUserByUsername,
        getGitFollower: getGitFollower,
        getGitUserRepos: getGitUserRepos
};
//	function nekaimena(username){
//	return $http.get("https://api.github.com/users/"+username).  .then(getImena).catch(getNoImena);
//            
//            function getImena(response){
//                return response;
//            }
    
//            https://api.github.com/users/
    
//            function getNoImena(response){
//                return response;
//            };http://demo0561392.mockable.io/rbacevic
//}
//}
    function getGitUserByUsername(username){
    return $http.get("http://demo0561392.mockable.io/"+username).then(getImena).catch(getNoImena);
            
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
    function getGitUserRepos(repos){
        return $http.get(repos).then(getRepos).catch(getNoRepos);
            
            function getRepos(response){
                return response;
            }
            function getNoRepos(response){
                return response;
            };
    }
}
})();
