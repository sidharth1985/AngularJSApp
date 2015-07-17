
angular.module('myApp').controller('employer', function($scope, $http,$modal,$log) {
	
	$scope.editTableData = {};
	$scope.addEmployer = false;
	$scope.init = function() {
		$http.get("/getEmployers").success(function(response) {
			$scope.employers = response;
			for(var j=0;j<$scope.employers.length;j++) {
				$scope.editTableData[j] = false;
			}
		});
	};
	
	
	$scope.addEmployerFunction = function() {
		$scope.addEmployer = false;
		$http.post("/addEmployer",$scope.newEmployer).success(function(data, status, headers, config) {
			$scope.employers.push(data);
			$scope.newEmployer.name="";
			$scope.newEmployer.city="";
			$scope.editTableData[data.id] = false;

		});
		
	};
	
	
	$scope.enableAddEmployer = function()  {
		$scope.addEmployer = true;
	};
	
	$scope.deleteEmployer = function(employer) {
		var modalInstance = $modal.open({
		      animation: $scope.animationsEnabled,
		      templateUrl: 'popUp.html',
		      controller: 'popupController',
		      resolve: {
		        employerData: function () {
		          return employer.name;
		        }
		      }
		    });
		
		modalInstance.result.then(function(result) {
			for(var i=0;i<$scope.employers.length;i++) {
				if($scope.employers[i].id == employer.id) {
					$http.get("/deleteEmployer?employerId="+employer.id).success(function() {
						$scope.employers.splice(employer.id,1);
					})
				}
			}
		});
		
	};
	
	$scope.editEmployer = function(employerId) {
		$scope.editTableData[employerId] = $scope.editTableData[employerId] == false ? true : false;
	};
	
});

angular.module('myApp').controller('employee', function($scope,$routeParams) {
	
	$scope.employerId = $routeParams.employerId;

});

angular.module('myApp').controller('popupController', function($scope,$log, $modalInstance,employerData) {
	
	$scope.employerId = employerData;
	$scope.ok = function(result) {
		$modalInstance.close(result);
	};
	
	$scope.cancel = function() {
			$modalInstance.dismiss('cancel');
	};
	
});

angular.module('proposalsApp').controller('proposalController',function($scope){
	$scope.savedProposals = [{proposalId : "PROPOSAL-101",proposalName : "proposalSentInJan"},{proposalId : "PROPOSAL-102",proposalName:"proposalSentInFeb"}];
});
