const tasksList = document.getElementsByClassName('tasks__list')
const addTaskButton = document.getElementById('tasks__add')

addTaskButton.addEventListener('click', addTaskButtonHandler)

function addTaskButtonHandler(event) {
    const addTaskText = document.getElementById('task__input')

    task = `
        <div class="task">
            <div class="task__title">
            
            ${addTaskText.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>
    `

    tasksList[0].innerHTML += task

    event.preventDefault()
}



document.addEventListener('click', event => event.target.classList.contains('task__remove') ? event.target.closest('.task').remove() : null)

