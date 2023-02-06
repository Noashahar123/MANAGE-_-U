import Tasks from "./classes/Tasks.js";
import taskManager from "./classes/taskManager.js";


let manager = new taskManager();
present();
    
function present(){
    document.getElementById("ty").innerHTML = "";
    document.getElementById("complit").innerHTML = "";
    document.getElementById("typeATask").value = "";
    for (let tasknew of manager.tasksArr){
        if (tasknew.completed == false){
        tasknew = document.getElementById("ty").innerHTML += `<tr> <td> ${tasknew.get("description")} </td><td> 
        <button type="button" id="button_1" class="btn btn-success" onclick="checked(${tasknew.get("id")})"><i class="fa-solid fa-check"></i></button>
         </td> <td>
         <button type="button" id="button_2" class="btn btn-danger" onclick="updated(${tasknew.get("id")})"><i class="fa-solid fa-pen"></i></button> </td> 
         <td> 
         <button type="button" id="button_3" class="btn btn-primary" onclick="deleteTaskFromList(${tasknew.get("id")})" ><i class="fa-solid fa-trash"></i></button></td>
         </tr>`;
         }else{
            tasknew = document.getElementById("complit").innerHTML += `<tr> <td> ${tasknew.get("description")} </td><td> 
        <button type="button" id="button_1" class="btn btn-success" onclick="checked(${tasknew.get("id")})" disabled><i class="fa-solid fa-check"></i></button>
         </td> <td>
         <button type="button" id="button_2" class="btn btn-danger" onclick="updated(${tasknew.get("id")})" disabled><i class="fa-solid fa-pen"></i></button> </td> 
         <td> 
         <button type="button" id="button_3" class="btn btn-primary" onclick="deleteTaskFromList(${tasknew.get("id")})" disabled><i class="fa-solid fa-trash"></i></button></td>
         </tr>`;
    }
    } 
}
    

window.addNewTask = function addNewTask(){
    let type = document.getElementById("typeATask").value;
    manager.addTask(new Tasks(type));
    present();
};

window.deleteTaskFromList = function deleteTaskFromList(id){
    if(confirm("Are You Sure?")){
        manager.deleteTask(id);
        present();
        alert("Deleted successfully")
    }
};
 window.updated = function updated(id){
    let newTask1 = prompt("Enter Changes:");
    manager.updatedTask(id, newTask1);
    present();
 };
window.checked = function checked(id){
    manager.completedTask(id);
    alert ("Removed successfully")
    present();
};












