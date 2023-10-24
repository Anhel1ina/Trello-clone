export const createDivPargFormElement = (elementName, classname, appendEl) =>{
    const createdElem = document.createElement(elementName)
    createdElem.className = classname
    appendEl.append(createdElem)
    return createdElem
}

export const createInputElement = (classname, typeName, valueName, appendEl) =>{
    const buttonEl = document.createElement('input')
    buttonEl.className = classname
    buttonEl.type = typeName
    buttonEl.value = valueName
    appendEl.append(buttonEl)
    return buttonEl
}

export function DeleteModal(blockToAdd){
    const modal = createDivPargFormElement('div', 'modal modalDeleteAll', blockToAdd)

    const modalDeleteAll = createDivPargFormElement('div', 'modalDeleteAll__holder', modal)

    const delWarnSign = createDivPargFormElement('div', 'modalDeleteAll__holder_img', modalDeleteAll)

    const modalMessage = createDivPargFormElement('p', 'modalDeleteAll__holder_message', modalDeleteAll)
    modalMessage.innerHTML = 'Confirm deleting EVERYTHING'
        
    const modalCancelButton = createDivPargFormElement('button', 'modalDeleteAll__holder_cancel', modalDeleteAll)
    modalCancelButton.innerText = 'cancel'

    const modalConfirmButton = createDivPargFormElement('button', 'modalDeleteAll__holder_confirm', modalDeleteAll)
    modalConfirmButton.innerText = 'confirm'

    this.modal = modal
    this.modalMessage = modalMessage
}


export function ColorChangePalette(blockToAdd){
    const colorChangeContainer = createDivPargFormElement('div', 'color-change-container', blockToAdd)
    const color1 = createDivPargFormElement('button', '.color-change-container__elem', colorChangeContainer)
    const color2 = createDivPargFormElement('button', '.color-change-container__elem', colorChangeContainer)
    const color3 = createDivPargFormElement('button', '.color-change-container__elem', colorChangeContainer)
    const color4 = createDivPargFormElement('button', '.color-change-container__elem', colorChangeContainer)
    const color5 = createDivPargFormElement('button', '.color-change-container__elem', colorChangeContainer)
    const color6 = createDivPargFormElement('button', '.color-change-container__elem', colorChangeContainer)

    this.colorChangeContainer = colorChangeContainer
    this.color1 = color1
    this.color2 = color2
    this.color3 = color3
    this.color4 = color4
    this.color5 = color5
    this.color6 = color6

}
