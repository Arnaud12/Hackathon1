class mainController {

    constructor(todoService) {
        this.todoService = todoService;
        this.load();

        $(document).ready(function() {

        $("#formulaire").click(function(){
          $("#test").show("slow");
          //$("#acheteur").hide("slow");
        });

      });
    }

    load() {
        this.todoService.getAll().then((res) => {
            this.todos = res.data;
        })
    }

    create() {
        this.todoService.create(this.todo).then(() => {
            this.todo = '';
            this.load()
        })
    }

    update(todo) {
        this.todoService.update(todo._id, todo.description).then(() => {
            this.load()
        })
    }

    delete(todo) {
        this.todoService.delete(todo._id).then(() => {
            this.load()
        })

    }

}
