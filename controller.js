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

    console.log("duvaj ga opet")
    return servis.getGitUserByUsername(username).then(function(response){
        console.log(response.data)
        vm.gituser = response.data;
        return vm.gituser;
    });
}
    
    function getGitFollower(){
        console.log("pusi ga bre")
        return servis.getGitFollower(vm.gituser.followers_url).then(function(response){
            if(response.status == 200){
                console.log(response.data)
            vm.gitfollower = response.data;
            return vm.gitfollower;
            }
            else{
              console.log("nema bre nema")
            }
        });
        
    }
  
        vm.showMe = false;
    vm.myFunc = function() {
        vm.showMe = !vm.showMe;
    }
    
}
})();


