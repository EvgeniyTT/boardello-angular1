export default class TaskColumnController {
  constructor($window, $document, $element, $scope) {
    'ngInject';
    this.column = $scope.column;
    this.$scope = $scope;
    this.$element = $element[0];
  }

  $onInit() {
    //DRAGO-DROPABLE PART
    this.sortableOptions = {
      placeholder: "panel-placeholder",
      connectWith: ".column",
      update: (event, ui) => {
        // send board data to server
      }
    };
  }

  addTask(task) {
    console.log('COLUMN CONTROLLER, task: ', task);
    this.column.tasks.push(task)
  }

  deleteTask(task) {
    this.column.tasks = this.column.tasks.filter(item => item != task);
  }

  $onDestroy() {
    // remove event listeners
    // this.$document.removeEventListener('scroll', this.scrollListener);
  }

}
