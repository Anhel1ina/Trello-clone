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
