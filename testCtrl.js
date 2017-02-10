(function(){
angular .module('myapp')
	.controller('testCtrl', testCtrl);

function testCtrl(){
    var vm = this;

	vm.text = "Dobro dosli na pocetnu stranu!";

}

})();