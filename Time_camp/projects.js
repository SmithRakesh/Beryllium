showProjects();
var addProjectInput = document.getElementById('projectName')
var addProjectButtton = document.getElementById('addButton')

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
    var html = "";
        html += ` <div class="more-dropdown-content">
                    <a href="#"><i class="fas fa-tachometer-alt"></i>  Dashboard</a>
                    <a href="#"><i class="fas fa-bicycle"></i> Awaytimes</a>
                    <a href="#"><i class="fas fa-laptop"></i> Activities</a>
                    <a href="#"><i class="fas fa-sitemap"></i> Catogeries</a>
                    <a href="#"><i class="far fa-calendar-alt"></i> Timeline</a>
                    <a href="#"><i class="fas fa-crosshairs"></i> Goals</a>
                    <a href="#"><i class="fas fa-rocket"></i> Efficiency</a>
                    <a href="#"><i class="far fa-newspaper"></i> User Statics</a>
     </div>`
     projectList.innerHTML = html;
     document.querySelector('more-dropdown-content').style.display = block;
}
function deleteItem(index) {
    var task = localStorage.getItem("localtask");
    var taskObj = JSON.parse(task);
    taskObj.splice(index, 1);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showProjects()
}

function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
    //random color will be freshly served
}
