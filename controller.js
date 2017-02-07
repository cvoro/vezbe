(function(){

angular
	.module('myapp')
	.controller('ctrl', ctrl);
	
ctrl.$inject = ['servis'];
function ctrl(servis){
//
var vm = this;
    vm.getPod = getPod;
   vm.getPodPratioci = getPodPratioci;
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
function getPod(username){

    console.log("duvaj ga opet")
    return servis.getPod(username).then(function(response){
        console.log(response.data)
        vm.data = response.data;
        return vm.data;
    });
}
    function getPodPratioci(){
        console.log("pusi ga bre")
        return servis.getPodPratioci(vm.data.followers_url).then(function(response){
            console.log(response.data)
//                        console.log(response)

            vm.podaci = response.data;
            return vm.podaci;
        });
        
    }
}
})();


