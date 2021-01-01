var d = new Date(); 
var hours = d.getHours(); 
var mins = d.getMinutes(); 
console.log(hours,mins)
document.getElementById("startTime").innerText = hours +":"+mins
document.getElementById("endTime").innerText = hours +":"+mins
document.getElementById("duration").innerText = "0 h 00m"
var html = "";
var j = 0
document.getElementById("plus").addEventListener("click",function addTask(e,j){
   
    var taskList = document.getElementById("taskList");
    
        html += `<tr class="rowTask">
           
                    <td><button onclick="showMore(${e,j})"class="selectTasks" id="selectTasks">(slect task)</button></td>
                    <td><p class="note2">note</p></td>
                    <td><div id="startTime" class="startTime"></i></div></td>
                    <td><p class="hypen">-</p></td>
                    <td><div class="straight"></div></td>
                    <td><div id="endTime" class="endTime"></i></div></td>
                    <td> <div id="duration" class="duration profilee"></div></td>
            </tr>`;
           
        j++;
        
    taskList.innerHTML = html;

    taskList.innerHTML = html;

    var task = localStorage.getItem("localtask");
    if (task == null) {
        taskObj = [];

    } else {
        taskObj = JSON.parse(task);
    }
    
   
})


var flag = 0
var projects = []


function selectProject(index){
    var task = localStorage.getItem("localtask");
    var taskObj = JSON.parse(task);
    console.log(taskObj)
    var selectTask = document.querySelectorAll(".selectTasks")
    selectTask[index].innerText = taskObj[index].task_name
}

function showMore(indexs){

   
    
    taskObj.forEach(function (item , index) {
         projects[index] = item.task_name
    })
   
    var html = "";
    if(flag == 0){
            html +=`(slect task) <div class="project-dropdown-content">`
            for(let i = 0; i < projects.length ;i++){
                html += ` 
                <a href="#" onclick="selectProject(${i})">${projects[i]} </a>
          
                <hr/>
              

             `
            }
            html += `</div>`
            
       

        var moreAbout = document.querySelectorAll(".selectTasks")
       
        moreAbout[indexs].innerHTML = html;
        document.querySelector('.project-dropdown-content').style.display = "block";
        
        flag =1;
    }
    else{
        document.querySelector('.project-dropdown-content').style.display = "none"; 
        flag = 0;
    }
    
       
}
