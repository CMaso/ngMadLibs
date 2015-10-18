angular.module('myApp',[])

	.filter('suffix', function() {
		return function(input){
			input = input || "";
			var n=input.substring(input.length-2);
			//if ($scope.fncIsNumeric(n)) {//validation should ensure it is numeric, not a custom function here
				switch(n){
					case '1':
					case '01':
					case '21':
					case '31':
					case '41':
					case '51':
					case '61':
					case '71':
					case '81':
					case '91':
						return input +"st";
					case '2':
					case '02':
					case '22':
					case '32':
					case '42':
					case '52':
					case '62':
					case '72':
					case '82':
					case '92':
						return input + "nd";
					case '3':
					case '03':
					case '23':
					case '33':
					case '43':
					case '53':
					case '63':
					case '73':
					case '83':
					case '93':
						return input + "rd";
					default:
						return input + "th";
				}
				return "";
			}
		})
		
	.controller('myCtrl', function($scope){
	
		$scope.submitted = false;
		$scope.ingPattern = new RegExp(".*ing$"); //define this pattern here for re-use;
		$scope.numPattern = new RegExp("^[0-9]+([.][0-9]+)?$");//define this pattern here for re-use. How to allow +,-, or nothing at start?
		
		//$scope.original = angular.copy($scope.data);
		
		$scope.doSubmit = function(isValid) {
			if(isValid) {
				$scope.submitted = true;
				//console.log($scope.data);
				//console.log($scope.formLibChoices.nonsenseWord);
			}
		};
		
		$scope.startOver = function() {
			$scope.data = {};
			$scope.formLibChoices.$setPristine();
			$scope.formLibChoices.$setUntouched();
			$scope.submitted = false;
		};
	});