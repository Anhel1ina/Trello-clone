import { createDivPargFormElement, createInputElement } from "./add-elem-func";
import {innerBoardBlock, boardsBlock } from "./main";

let columnId = 100
export function Column(){
    const columnContainer = document.createElement('div')
    columnContainer.className = 'columns__col-wrapper col-wrapper'
    columnContainer.id = columnId++
    const columnHeader = createDivPargFormElement('div', 'col-wrapper__header col-header', columnContainer)
    const columnName = createInputElement('col-header__name', 'input', '', columnHeader)
    columnName.placeholder = 'Enter Column Name'

    // columnName.value = nameOfColumn
    columnName.id = 'column-name' + columnContainer.id
    columnName.addEventListener('change', () => {
        if(!(columnName.value === '')){
            columnName.disabled = true
        }
    })

    const countOfTask = createDivPargFormElement('p', 'col-header__count', columnHeader)
    const editButton = createDivPargFormElement('div', 'col-header__edit-button', columnHeader)
    editButton.addEventListener('click', () => {
        columnName.disabled = false
    })

    countOfTask.innerText = 0

    //cards-holder inner-content
    const innerContentHolder = createDivPargFormElement('div', 'col-wrapper__inner-content-holder inner-content-holder', columnContainer)
    
    //card holder and events
    const cardHolder = createDivPargFormElement('div', 'inner-content-holder__card-holder card-holder', innerContentHolder)

    const cardContainer = createDivPargFormElement('div', 'card-holder__card column-card', cardHolder)
    
    
    const addCardButton = createDivPargFormElement('button', 'inner-content-holder__add-button card-add-button', innerContentHolder)

    const iconAddCardButton = createDivPargFormElement('p', 'card-add-button__icon', addCardButton)
    iconAddCardButton.innerText = '+'
    const textAddCardButton = createDivPargFormElement('p', 'card-add-button__text', addCardButton)
    textAddCardButton.innerText = 'add new card'


    //delete all

    const deleteAllButton = createDivPargFormElement('button', 'col-wrapper__delete-all delete-all-button', columnContainer)
    const textDeleteAllBUtton = createDivPargFormElement('p', 'delete-all-button__text', deleteAllButton)
    textDeleteAllBUtton.innerText = 'delete all'

    this.id = columnContainer.id
    this.columnName = columnName
    this.columnContainer = columnContainer
}