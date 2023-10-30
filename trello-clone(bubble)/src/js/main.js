import { createDivPargFormElement, createInputElement, deleteModal } from "./add-elem-func";
import { updateDate, updateTime, editColumnName} from "./functions";
import { Column } from "./column-create";
import { arrayOfCards, arrayOfColumns, cardStorageKey, columnStorageKey } from "./variables";
import { Card } from "./card-create";
import { getUsers } from "./user";

root.className = 'wrapper'
const headerBlock = createDivPargFormElement('div', 'wrapper__header header-block', root)
const logo = createDivPargFormElement('div', 'header-block__logo', headerBlock)
logo.innerText = 'bubble'


export const dateTime = createDivPargFormElement('div', 'header-block__datetime datetime', headerBlock)
const currentDate = createDivPargFormElement('div', 'datetime__date', dateTime)
const currentTime = createDivPargFormElement('div', 'datetime__time', dateTime)

updateDate(currentDate)
updateTime(currentTime)

export const boardsBlock = createDivPargFormElement('div', 'wrapper__board board-block', root)
export const innerBoardBlock = createDivPargFormElement('div', 'board-block__columns columns', boardsBlock)

export const addColumnButton = createDivPargFormElement('button', 'columns__add-button add-column-button', boardsBlock)
addColumnButton.addEventListener('click', () => {
    const column = new Column()
    arrayOfColumns.push(column)
    document.body.querySelector('.columns').append(column.columnContainer)
})

const plusButton = createDivPargFormElement('p', 'add-column-button__plus', addColumnButton)
plusButton.innerText = '+'
const innerTextAddButton = createDivPargFormElement('p', 'add-column-button__text', addColumnButton)
innerTextAddButton.innerText = 'add new column'


//saving and uploading 

window.addEventListener('load', () => {
    const savedColumnData = JSON.parse(localStorage.getItem(columnStorageKey)) ?? []
    const savedCardsData = JSON.parse(localStorage.getItem(cardStorageKey)) ?? []
    for(let i = 0; i < savedColumnData.length; i++){
        const column = new Column(savedColumnData[i].nameOfColumn, savedColumnData[i].countOfTask)
        arrayOfColumns.push(column)
        document.body.querySelector('.columns').append(column.columnContainer)
    }

    for(let j = 0; j < savedCardsData.length; j++){
        const card = new Card(savedCardsData[j].taskCardTitle, savedCardsData[j].idOfColumnForCard, 
        savedCardsData[j].taskTime, savedCardsData[j].taskDate, savedCardsData[j].taskCardDescription, 
        savedCardsData[j].taskCardColor, savedCardsData[j].taskCardUsers)
        arrayOfCards.push(card)

        const columns = document.body.querySelectorAll('.col-wrapper')
        columns.forEach(column => {
            if(column.id === savedCardsData[j].idOfColumnForCard){
                column.querySelector('.column-card').append(card.taskCard)
            }
        })
    }
})

window.addEventListener('DOMContentLoaded', () => {
    setInterval(function(){
        arrayOfColumns.forEach((column) => {
            let countOfCardsForColumn = +(column.cardContainer.children.length)
            column.countOfTask.innerText = countOfCardsForColumn
        })
    }, 100)

    //change card-column id while dropping
    setInterval(function(){
        arrayOfColumns.forEach((column) => {
            let columnCards = column.columnContainer.querySelectorAll('.task-card')
            arrayOfCards.forEach((card) => {
                columnCards.forEach((columnCard) => {
                    if(columnCard.id === card.taskCard.id){
                        card.idForColumn = column.columnContainer.id
                    }
                })
            })
        })
    }, 100)

    setInterval(function(){
        arrayOfCards.forEach((card) => {
            if(card.taskCard.style.display === 'none'){
                card.taskCard.style.display = 'grid'
            }
        })
    }, 100)
})


window.addEventListener('beforeunload', () => {
    const storageColumnsData = arrayOfColumns.map(column => {
        return{
            idOfColumn: column.id,
            nameOfColumn: column.columnName.value,
            countOfTask: column.countOfTask.innerText
        }
    })
    localStorage.setItem(columnStorageKey, JSON.stringify(storageColumnsData))

    let newArrayOfCards = []
    arrayOfColumns.forEach(column => {
        let columnCards = column.columnContainer.querySelectorAll('.task-card')
        columnCards.forEach(columnCard => {
            arrayOfCards.forEach(card => {
                if(columnCard.id === card.taskCard.id){
                    newArrayOfCards.push(card)
                }
            })
        })
    })
    const storageCardData = newArrayOfCards.map(card => {
        let usersArray = []
        for(let user of card.taskCardUsers){
            usersArray.push(user.id)
        }
        return{
            idOfCard: card.id,
            idOfColumnForCard: card.idForColumn,
            taskCardTitle: card.taskCardTitle.value,
            taskTime: card.taskTime.innerText,
            taskDate: card.taskDate.innerText,
            taskCardDescription: card.cardDescription.value,
            taskCardColor: card.cardColorTheme.getPropertyValue('background-color'),
            taskCardUsers: usersArray
        }
    })
    localStorage.setItem(cardStorageKey, JSON.stringify(storageCardData))
})


