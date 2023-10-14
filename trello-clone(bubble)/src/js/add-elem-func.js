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

export const createModal = () => {
    const modal = createDivPargFormElement('div', 'modal modalDeleteAll', root)
        const modalDeleteAll = createDivPargFormElement('div', 'modalDeleteAll__holder', modal)

        const modalMessage = createDivPargFormElement('p', 'modalDeleteAll__holder_message', modalDeleteAll)
        modalMessage.innerText = 'Confirm deleting: '
        
        const modalCancelButton = createDivPargFormElement('button', 'modalDeleteAll__holder_cancel', modalDeleteAll)
        modalCancelButton.innerText = 'cancel'

        const modalConfirmButton = createDivPargFormElement('button', 'modalDeleteAll__holder_confirm', modalDeleteAll)
        modalConfirmButton.innerText = 'confirm'
}