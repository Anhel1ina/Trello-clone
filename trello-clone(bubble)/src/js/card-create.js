import { createDivPargFormElement, createInputElement } from "./add-elem-func"
import { getCurrentTime } from "./functions"
import { arrayOfCards } from "./variables"

let cardId = 1100
export function Card(task, columnId){
    const taskCard = document.createElement('div')
    taskCard.className = 'column-card__task-card task-card'
    taskCard.id = cardId++
    this.idForColumn = columnId

    const taskCardHeader = createDivPargFormElement('div', 'task-card__header', taskCard)
    const taskCardTime = createDivPargFormElement('div', 'task-card__header_time', taskCardHeader)
    taskCardTime.innerText = getCurrentTime()

    const taskCardButtons = createDivPargFormElement('div', 'task-card__header_buttons card-buttons', taskCardHeader)

    const taskCardEdit = createDivPargFormElement('button', 'card-buttons__edit', taskCardButtons)
    taskCardEdit.innerText = 'Edit'

    const taskCardDelete = createDivPargFormElement('button', 'card-buttons__delete', taskCardButtons)
    taskCardDelete.innerText = 'Delete'
    taskCardDelete.addEventListener('click', () => {
        const cardToDelete = this.taskCard
        cardToDelete.remove()
        arrayOfCards.forEach((card, index) => {
            if(cardToDelete === card.taskCard){
                arrayOfCards.splice(index, 1)
            }
        })
    })

    // const taskCardDescription = createDivPargFormElement('textarea','task-card__description', taskCard)
    const taskCardTitle = createInputElement('task-card__title', 'text', '', taskCard)
    taskCardTitle.placeholder = 'Enter task'
    taskCardTitle.disabled = false
    if(!(task === undefined)){
        taskCardTitle.value = task
    }
    if(taskCardTitle.value){
        taskCardTitle.disabled = true
    }

    taskCardTitle.addEventListener('change', () => {
        if(!(taskCardTitle.value === '')){
            taskCardTitle.disabled = true
        }
    })


    const taskCardFooter = createDivPargFormElement('div', 'task-card__footer', taskCard)
    const taskCardUsers = createDivPargFormElement('div', 'task-card__footer_users', taskCardFooter)
    const colorChange = createDivPargFormElement('button', 'task-card__footer_colors', taskCardFooter)
    colorChange.innerText = '...'
    

    this.taskCard = taskCard
    this.taskCardTitle = taskCardTitle
    this.id = taskCard.id
}