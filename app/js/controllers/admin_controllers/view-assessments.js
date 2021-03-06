angular.module('cognitio.controllers')
  .controller('viewAssesmentCtrl', ['$scope', '$state', 'Authentication', 'Assessment',
    function($scope, $state, Authentication, Assessment) {

      $scope.dateNow = Date.now();
      
      var assessments = Assessment.all();

      assessments.$loaded(function(res) {
        $scope.assessments = res;
      });
    }
]);
