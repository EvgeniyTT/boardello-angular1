
export default class TaskMainController {
  constructor(taskService) {
    'ngInject';
    this.taskService = taskService;
  }

  $onInit() {
    this.boardData = this.taskService.list();
  }

  $onDestroy() {
    // remove event listeners
    // this.$document.removeEventListener('scroll', this.scrollListener);
  }

}
