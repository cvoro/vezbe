(function(){

angular
	.module('myapp')
	.controller('ctrl', ctrl);
	
ctrl.$inject = ['servis'];
function ctrl(servis){
//
var vm = this;
    vm.getGitUserByUsername = getGitUserByUsername;
   vm.getGitFollower = getGitFollower;
    vm.getGitUserRepos = getGitUserRepos;
    vm.showErrorOnUser = false;
    vm.showErrorOnTable = false;
//
//	activate();
//	 function activate(){
//console.log("duvaj ga");
//	 	return getData().then(function(){});
//	 }
//	 	function getData(){
//	 	return servis.nekaimena()
//		.then(function(data){
//			console.log(data);
//		vm.ime = data.data;
//		console.log(vm.ime);
//		return vm.ime;		
//		});	
//	 	}	
//
activate();
    function activate(){
console.log("duvaj ga")
// 	.then(function(){});
	 }
function getGitUserByUsername(username){
    vm.gitrepos={};
    vm.gituser={};
     vm.gitfollower={};
    console.log("duvaj ga opet")
    return servis.getGitUserByUsername(username).then(function(response){
        if(response.status == 200){
            vm.showErrorOnUser = false;
             console.log(response.data)
        vm.gituser = response.data;
        return vm.gituser;
             vm.showErrorOnTable = false;
            
        }
        else{
            vm.showErrorOnTable = true;
            vm.showErrorOnUser = true;
                            vm.greska = "Nema tog Git korisnika!";
                return vm.greska;
            console.log("nema ga stvarno")
              }
    });
}
        function getGitFollower(){
//            vm.gitfollower={};
//            vm.gitrepos={};
        console.log("pusi ga bre")
        return servis.getGitFollower(vm.gituser.followers_url).then(function(response){
            if(response.status == 200){
                console.log(response.data)
            vm.gitfollower = response.data;
            return vm.gitfollower;
                
            }
            else{
            console.log("nema ga stvarno")
            }
        }); 
    }
     function getGitUserRepos(){
//         vm.gitrepos={};
        console.log("pusi ga bre")
        return servis.getGitUserRepos(vm.gituser.repos_url).then(function(response){
            if(response.status == 200){
                console.log(response.data)
            vm.gitrepos = response.data;
            return vm.gitrepos;
            }
            else{
            console.log("nema ga stvarno")
            }
        }); 
    }
        vm.showMe = false;
    vm.myFunc = function() {
        vm.showMe = !vm.showMe;
    }
    vm.prikazi = false;
    vm.switch = function(){
        vm.prikazi = !vm.prikazi;
    } 
    vm.showtable = false;
    vm.Stable = function(){
        vm.showtable = !vm.showtable;
    } 
    
}
})();


