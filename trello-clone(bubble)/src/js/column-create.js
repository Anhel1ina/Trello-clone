import { createDivPargFormElement, createInputElement, createModal} from "./add-elem-func";
import { editColumnName } from "./functions";
import {innerBoardBlock, boardsBlock} from "./main";
import { arrayOfColumns } from "./variables";

let columnId = 100
export function Column(name){
    const columnContainer = document.createElement('div')
    columnContainer.className = 'columns__col-wrapper col-wrapper'
    columnContainer.id = columnId++
    const columnHeader = createDivPargFormElement('div', 'col-wrapper__header col-header', columnContainer)
    const columnName = createInputElement('col-header__name', 'input', '', columnHeader)
    columnName.placeholder = 'Enter Column Name'

    if(!(name === undefined)){
        columnName.value = name
    }
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
        editColumnName(columnName)
    })

    countOfTask.innerText = 0

    //cards-holder inner-content
    const innerContentHolder = createDivPargFormElement('div', 'col-wrapper__inner-content-holder inner-content-holder', columnContainer)
    
    //card holder and events
    const cardHolder = createDivPargFormElement('div', 'inner-content-holder__card-holder card-holder', innerContentHolder)

    const cardContainer = createDivPargFormElement('div', 'card-holder__card column-card', cardHolder)
    
    
    const addCardButton = createDivPargFormElement('button', 'inner-content-holder__add-button card-add-button', innerContentHolder)
    addCardButton.addEventListener('click', () => {
        const taskCard = createDivPargFormElement('div', 'column-card__task-card task-card', cardContainer)

    })

    const iconAddCardButton = createDivPargFormElement('p', 'card-add-button__icon', addCardButton)
    iconAddCardButton.innerText = '+'
    const textAddCardButton = createDivPargFormElement('p', 'card-add-button__text', addCardButton)
    textAddCardButton.innerText = 'add new card'


    //delete all

    const deleteAllButton = createDivPargFormElement('button', 'col-wrapper__delete-all delete-all-button', columnContainer)
    const textDeleteAllBUtton = createDivPargFormElement('p', 'delete-all-button__text', deleteAllButton)
    textDeleteAllBUtton.innerText = 'delete all'

    deleteAllButton.addEventListener('click', () => {
        document.querySelector('.modalDeleteAll').classList.add('modal-show')

        document.querySelector('.modalDeleteAll').addEventListener('click', (event) => {
            if(event.target === document.querySelector('.modalDeleteAll__holder_cancel')){
                document.querySelector('.modalDeleteAll').classList.remove('modal-show')
            }
            else if(event.target === document.querySelector('.modalDeleteAll__holder_confirm')){
                const columnToDelete = deleteAllButton.parentElement
                columnToDelete.remove()

                arrayOfColumns.forEach((column, index) => {
                    if(columnToDelete === column.columnContainer){
                        let deleteColumn = arrayOfColumns.splice(index, 1)
                    }
                })
                document.querySelector('.modalDeleteAll').classList.remove('modal-show')
            }
        })
    })

    this.id = columnContainer.id
    this.columnName = columnName
    this.deleteAllButton = deleteAllButton

    this.columnContainer = columnContainer
}


