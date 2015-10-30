angular.module('translaThorApp', [])
  .directive('navBar', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      controller: ['$scope', function($scope) {
        var sections = $scope.sections = [];

        $scope.select = function(section) {
          angular.forEach(sections, function(section) {
            section.selected = false;
          });
          section.selected = true;
        };

        this.addSection = function(section) {
          if (sections.length === 0) {
            $scope.select(section);
          }
          sections.push(section);
        };
      }],
      templateUrl: 'app/components/navbar/navbar.html'
    };

  });
