let dragItem = null
let isItemMoved = false

export function dragStart(event) {
    dragItem = this;
    event.dataTransfer.effectAllowed = ''
    event.dataTransfer.setData('text/plain', '')
    setTimeout(() => {
        this.style.display = 'none'
    }, 0);
    console.log(1)
}

export function dragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    console.log(2)
}

export function dragLeave() {
    dragItem.style.display = 'grid'
    console.log(3)
}

///////

export function dragDrop(event) {
    const targetColumn = this.closest('.column-card')
    event.preventDefault()

    const sibling = Array.from(targetColumn.children).find(child => {
        const rect = child.getBoundingClientRect()
        const middleY = rect.top + rect.height / 2
        return event.clientY < middleY
    });

    if (!sibling) {
        targetColumn.append(dragItem)
        dragItem.style.display = 'grid'
    } else {
        targetColumn.insertBefore(dragItem, sibling)
        dragItem.style.display = 'grid'
    }

    dragItem.style.display = 'grid'
    dragItem = null

    console.log(4)
}



function isEmpty(column) {
    return column.children.length === 0
    console.log(5)
}

export function dragEnter(event) {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
    const targetColumn = this.closest('.column-card')
    if (isEmpty(targetColumn)) {
        targetColumn.appendChild(dragItem)
    }
    console.log(6)
}


