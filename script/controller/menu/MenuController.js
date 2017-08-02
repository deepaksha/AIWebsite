angular.module('MenuController', [])
.controller('MenuCtrl', function($scope) {
   $scope.menuList = [
	   	{
	   		label: 'Home',
	   		path: '#/home',
    	},
	   	{
	   		label: "Products",
	   		path: '#/products'
	   	},
	   	{
	   		label: "Service",
	   		path: '#/services'
	   	},
	   	{
	   		label: "Contact",
	   		path: '#/contact'
	   	}
   ]; 
});
