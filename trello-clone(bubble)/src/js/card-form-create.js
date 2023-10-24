import { createDivPargFormElement, createInputElement } from "./add-elem-func"

export function CardForm(blockToAdd, title, description){
    const mainCardForm = createDivPargFormElement('div', 'task-card__main-form', blockToAdd)
    const mainCardFormHolder = createDivPargFormElement('div', 'task-card__main-form_holder form-holder', mainCardForm)

    const mainFormTitle = createInputElement('form-holder__title', 'text', '', mainCardFormHolder)
    mainFormTitle.placeholder = 'Enter task...'
    mainFormTitle.value = title

    const colorPalette = createDivPargFormElement('div', 'form-holder__palette', mainCardFormHolder)
    

    let colorsArray = []
    for(let i = 1; i <= 6; i++){
        const color = createDivPargFormElement('button', 'form-holder__palette_elem', colorPalette)
        color.classList.add(`task-card-back-color${i}`)
        colorsArray.push(color)
    }

    colorsArray.forEach((color, index) => {
        color.addEventListener('click', () => {
            for(let i = 1; i <= 6; i++){
                mainCardFormHolder.classList.remove(`task-card-back-color${i}`)
                blockToAdd.classList.remove(`task-card-back-color${i}`)
            }
            if(color.classList.contains(`task-card-back-color${index + 1}`)){
                mainCardFormHolder.classList.add(`task-card-back-color${index + 1}`)
                blockToAdd.classList.add(`task-card-back-color${index + 1}`)
                colorTheme = `task-card-back-color${index + 1}`
            }
        })
    })

    const mainFormDespription = createDivPargFormElement('textarea', 'form-holder__description', mainCardFormHolder)
    mainFormDespription.placeholder = 'Enter task description...'
    if(description){
        mainFormDespription.value = description
    }

    const dropDownUsers = createDivPargFormElement('div', '.form-holder__dropdown dropdown', mainCardFormHolder)
    const dropDownButton = createDivPargFormElement('button', 'dropdown__button', dropDownUsers)
    dropDownButton.innerText = 'Select Users...'
    const dropDownContent = createDivPargFormElement('div', 'dropdown__inner-content dropdown-content', dropDownUsers)

    const dropDownSearch = createInputElement('dropdown-content__search', 'text', '', dropDownContent)
    const dropDownHolder = createDivPargFormElement('div', 'dropdown-content__holder dropdown-users-holder', dropDownContent)
    // create cards with users

    // const dropDownText = createDivPargFormElement('p', 'dropdown-text', dropDownUsers)
    // const dropDownIcon = createDivPargFormElement('div', 'dropdown-icon', dropDownUsers)

    const mainFormButtons = createDivPargFormElement('div', 'form-holder__buttons', mainCardFormHolder)
    const mainFormCancel = createDivPargFormElement('button', 'form-holder__cancel', mainFormButtons)
    mainFormCancel.innerText = 'Cancel'

    mainFormCancel.addEventListener('click', () => {
        mainCardForm.classList.remove('show-form')
        if(description){
            mainFormDespription.value = description
        }
        else{
            mainFormDespription.value = ''
        }
    })

    const mainFormConfirm = createDivPargFormElement('button', 'form-holder__confirm', mainFormButtons)
    mainFormConfirm.innerText = 'Confirm'

    mainFormConfirm.addEventListener('click', () => {
        mainCardForm.classList.remove('show-form')
    })

    this.mainCardForm = mainCardForm
    this.mainCardFormHolder = mainCardFormHolder

    this.mainFormTitle = mainFormTitle
    this.mainFormDespription = mainFormDespription

    this.mainFormConfirm = mainFormConfirm
    this.mainFormCancel = mainFormCancel
}