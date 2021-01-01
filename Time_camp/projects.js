showProjects();
var addProjectInput = document.getElementById('projectName')
var addProjectButtton = document.getElementById('addButton')
var flag = 0;
addProjectButtton.addEventListener('click', function(){
    var addProjectInputValue = addProjectInput.value;
    if(addProjectInputValue.trim()) {
        var task = localStorage.getItem("localtask")
        if(task == null) {
            taskObj = [];
        } else {
            taskObj = JSON.parse(task);
        }
        taskObj.push({ task_name: addProjectInputValue });
        localStorage.setItem("localtask", JSON.stringify(taskObj));
        addProjectInput.value = "";

    }
    showProjects();
});

function showProjects() {
    var task = localStorage.getItem("localtask");
    if (task == null) {
        taskObj = [];

    } else {
        taskObj = JSON.parse(task);
    }

    var html = "";
    var projectList = document.getElementById("projectList");
    taskObj.forEach(function (item , index) {
        html += `<tr class="row">
            <td><div class="coloredCircle"></div></td>
            <td><div class="showName">${ item.task_name}</div></td>
            <td><button class="addTask">Add task</button></td>
            <td><button class="collapse"><i class="fas fa-chart-pie"></button></td>
            <td><button onclick="showMore(${index})" class="more" id="more1">...</i></button onclick="deleteItem(${index})">
                    <div class="moreAbout"></div>
            </td>
            <td><div class="collapse" id="timer"><i class="fas fa-play"></i></div></td>
            </tr>`;
           
        });
        
    projectList.innerHTML = html;
    var highlightedItems = document.querySelectorAll(".coloredCircle")

highlightedItems.forEach(function(userItem) {
    userItem.style.backgroundColor = generateRandomColor()
  });
}

function showMore(index){
    
    if(flag == 0){
        var html = "";
        html += ` <div class="more-dropdown-content">
                        <a href="#" onclick="changeColor(${index})">Change color </a>
                        <a href="#">Archieve</a>
                        <a href="#">Clone it</a>
                        <a href="#"  onclick="deleteItem(${index})">Delete</a>
                        <hr/>
                        <a href="#">Move</a>
     
                  </div>`

        var moreAbout = document.querySelectorAll(".moreAbout")
        console.log(moreAbout,index)
        moreAbout[index].innerHTML = html;
        document.querySelector('.more-dropdown-content').style.display = "block";
        
        flag =1;
    }
    else{
        document.querySelector('.more-dropdown-content').style.display = "none"; 
        flag = 0;
    }
       
}
function deleteItem(index) {
    var task = localStorage.getItem("localtask");
    var taskObj = JSON.parse(task);
    taskObj.splice(index, 1);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showProjects()
    flag=0;
}

function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
    //random color will be freshly served
}



//Changing Color Of Input field
// var page = document.querySelector('body')
// var btn = document.getElementById("projectName")
// var outBox = document.querySelector('html')


//       outBox.addEventListener("click",function(e){
          
//          if(e.target == btn){
//           btn.style.borderColor = "green" ;
//          }
//          else{
//           btn.style.borderColor = "white" ;
//          }
          
//       })     


//Changing Color Of small circle
function changeColor(index) {

}