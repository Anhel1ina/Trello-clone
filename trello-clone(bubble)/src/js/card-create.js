import { createDivPargFormElement, createInputElement, ColorChangePalette } from "./add-elem-func"
import { getCurrentTime, getCurrentDate } from "./functions"
import { CardForm } from "./card-form-create"
import { arrayOfCards } from "./variables"


let cardId = 1100
export function Card(task, columnId, time, date, description){
    const taskCard = document.createElement('div')
    taskCard.className = 'column-card__task-card task-card'
    taskCard.id = cardId++
    this.idForColumn = columnId

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
    
    // const colorChange = createDivPargFormElement('button', 'task-card__footer_colors', taskCardFooter)
    // colorChange.innerText = '...'
    
    // colorChange.addEventListener('click', () => {
    //     console.log(colorTheme)
    // })
    
    const cardForm = new CardForm(taskCard, taskCardTitle.value, description)
    
    taskCardEdit.addEventListener('click', () => {
        cardForm.mainCardForm.classList.add('show-form')
        cardForm.mainFormTitle.value = taskCardTitle.value
    })


    cardForm.mainFormConfirm.addEventListener('click', () => {
        taskCardTitle.value = cardForm.mainFormTitle.value
        this.cardDescription = cardForm.mainFormDespription
    })

    this.taskCard = taskCard
    this.taskCardTitle = taskCardTitle
    this.id = taskCard.id

    this.taskTime = taskTime
    this.taskDate = taskDate

    this.cardDescription = cardForm.mainFormDespription
}