
export default class taskManager{
    constructor(){
        this.tasksArr = [];
       
    }
    addTask(newTask){
        this.tasksArr.push(newTask);
        
    }
    deleteTask(id){
        this.tasksArr = this.tasksArr.filter((task) => task.id !=id);
        
    }
    updatedTask(id, newdesc){
    let taskToUpdate = this.tasksArr.find((taskTo) =>taskTo.id == id);
    let indexToUpdate = this.tasksArr.indexOf(taskToUpdate);
    this.tasksArr[indexToUpdate].set("description", newdesc);
    }
completedTask(id){
    let taskToUpdate = this.tasksArr.find((task) => task.id == id);
 let indexToUpdate = this.tasksArr.indexOf(taskToUpdate);
this.tasksArr[indexToUpdate].completed = true;
}
}
