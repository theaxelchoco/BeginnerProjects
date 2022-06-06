let AddTask = () => {
    const FinishedTasks = document.getElementById("FinishedTasks")
    const UnfinishedTasks = document.getElementById("Tasks")
    let TaskInput = document.getElementById("TaskInput")

    if (TaskInput) {

        let Div = document.createElement("div")
        let Task = document.createElement("input")
        let Label = document.createElement("label")
        let Delete = document.createElement("button")
        
        Div.id = "RandomTask"

        Task.type = "checkbox"
        Task.value = TaskInput.value

        Label.for = "RandomTask"
        Label.id = "TaskLabel"
        Label.innerHTML = TaskInput.value

        Delete.innerHTML = "X"
        Delete.id = "TaskDelete"
        Delete.onclick = () => {
            console.log("Delete the task")
            Div.remove()
        }

        Div.appendChild(Task)
        Div.appendChild(Label)
        Div.appendChild(Delete)
        UnfinishedTasks.appendChild(Div)

        TaskInput.value = ""

        Task.addEventListener('change', () => {
            if (Task.checked) {
                Label.innerHTML = "<s>" + Task.value + "</s>"  //Task.value + "[DONE]"
                FinishedTasks.appendChild(Div)
            } else {
                Label.innerHTML = Task.value 
                UnfinishedTasks.appendChild(Div)
            }
        })

        
    }
}

let ClearList = () => {
    let FinishedTasks = document.getElementById("FinishedTasks")
    let UnfinishedTasks = document.getElementById("Tasks")

    let AllTasks = []
    AllTasks.push.apply(AllTasks,FinishedTasks.querySelectorAll("#RandomTask"))
    AllTasks.push.apply(AllTasks,UnfinishedTasks.querySelectorAll("#RandomTask"))

    for (let i = 0; i < AllTasks.length; i++){
        AllTasks[i].remove()
    }
}