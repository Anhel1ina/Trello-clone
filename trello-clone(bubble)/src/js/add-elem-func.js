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
    modalMessage.innerHTML = 'Confirm deleting EVERYTHING in the column'
        
    const modalCancelButton = createDivPargFormElement('button', 'modalDeleteAll__holder_cancel', modalDeleteAll)
    modalCancelButton.innerText = 'cancel'

    const modalConfirmButton = createDivPargFormElement('button', 'modalDeleteAll__holder_confirm', modalDeleteAll)
    modalConfirmButton.innerText = 'confirm'

    this.modal = modal
    this.modalMessage = modalMessage
}