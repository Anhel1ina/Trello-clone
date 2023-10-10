import { createDivPargFormElement, createInputElement } from "./add-elem-func";
import { updateDate, updateTime} from "./functions";
import { Column } from "./column-create";
import { arrayOfColumns, columnStorageKey } from "./variables";


root.className = 'wrapper'
const headerBlock = createDivPargFormElement('div', 'wrapper__header header-block', root)
const logo = createDivPargFormElement('div', 'header-block__logo', headerBlock)
logo.innerText = 'bubble'


export const dateTime = createDivPargFormElement('div', 'header-block__datetime datetime', headerBlock)
const currentDate = createDivPargFormElement('div', 'datetime__date', dateTime)
updateDate(currentDate)
const currentTime = createDivPargFormElement('div', 'datetime__time', dateTime)
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

document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        let columns = document.querySelectorAll('.col-header__name')
        columns.forEach((column) => {
            if(!column.innerHTML){
                column.readonly
            }
        })
    }, 100)
})


// window.addEventListener('load', () => {
//     const savedData = JSON.parse(localStorage.getItem(columnStorageKey)) ?? []
//     for(let i = 0; i < savedData.length; i++){
//         const column = new Column(savedData[i].nameOfColumn)
//         arrayOfColumns.push(column)
//         document.body.querySelector('.columns').append(column.columnContainer)
//     }
// })


// window.addEventListener('beforeunload', () => {
//     const storageColumnsData = arrayOfColumns.map(column => {
//         return{
//             idOfColumn: column.id,
//             nameOfColumn: column.columnName.value
//         }
//     })
//     localStorage.setItem(columnStorageKey, JSON.stringify(storageColumnsData))
// })
