import { createDivPargFormElement, createInputElement, ColorChangePalette } from "./add-elem-func"
import { getCurrentTime, getCurrentDate } from "./functions"
import { CardForm } from "./card-form-create"
import { arrayOfCards, arrayOfColumns } from "./variables"


let cardId = 1100
export function Card(task, columnId, time, date, description, color){
    const taskCard = document.createElement('div')
    taskCard.className = 'column-card__task-card task-card'
    
    taskCard.addEventListener('dblclick', () => {
        // cardForm.mainCardForm.classList.add('show-form')
    })
    

    if(!(color === 'rgba(255, 255, 255, 1)')){
        taskCard.style.backgroundColor = color
    }

    const taskCardHeader = createDivPargFormElement('div', 'task-card__header', taskCard)
    const taskCardTime = createDivPargFormElement('div', 'task-card__header_time task-card-full-time', taskCardHeader)

    const taskTime = createDivPargFormElement('p', 'task-card-full-time__time', taskCardTime)
    const taskDate = createDivPargFormElement('p', 'task-card-full-time__date', taskCardTime)
    
    if(time && date){
        taskTime.innerText = time
        taskDate.innerText = date
    }
    else{
        taskTime.innerText = getCurrentTime()
        taskDate.innerText = getCurrentDate()
    }

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

    const taskCardTitle = createInputElement('task-card__title', 'text', '', taskCard)
    taskCardTitle.placeholder = 'Enter task'
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
    const taskCardUsers = createDivPargFormElement('div', 'task-card__footer_users card-footer-users', taskCardFooter)

    
    const cardForm = new CardForm(taskCard, taskCardTitle.value, description, color)
    
    taskCardEdit.addEventListener('click', () => {
        cardForm.mainCardForm.classList.add('show-form')
        cardForm.mainFormTitle.value = taskCardTitle.value
    })


    cardForm.mainFormConfirm.addEventListener('click', () => {
        taskCardTitle.value = cardForm.mainFormTitle.value
        this.cardDescription = cardForm.mainFormDespription
    })

    taskCard.id = cardId++
    this.idForColumn = columnId

    this.taskCard = taskCard
    this.taskCardTitle = taskCardTitle
    this.id = taskCard.id

    this.taskTime = taskTime
    this.taskDate = taskDate

    this.cardDescription = cardForm.mainFormDespription
    this.cardColorTheme = window.getComputedStyle(taskCard)
}