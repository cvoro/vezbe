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
    vm.showgreska = false;
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
        if(response.status == 200){
            vm.showgreska = false;
             console.log(response.data)
        vm.gituser = response.data;
        return vm.gituser;
        }
        else{
            vm.showgreska = true;
                            vm.greska = "Nema tog Git korisnika!";
                return vm.greska;
            console.log("nema ga stvarno")
              }
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
}
})();


