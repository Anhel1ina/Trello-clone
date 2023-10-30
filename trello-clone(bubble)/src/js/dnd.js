let dragItem = null;
let isItemMoved = false;

export function dragStart(event) {
    dragItem = this;
    event.dataTransfer.effectAllowed = 'move'; // Устанавливаем тип операции drag & drop
    event.dataTransfer.setData('text/plain', '');
    setTimeout(() => {
        this.style.display = 'none';
    }, 0);
}

export function dragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
}

export function dragLeave() {
    dragItem.style.display = 'grid'
}

///////

export function dragDrop(event) {
    // const targetColumn = this.closest('.column-card');
    // const rect = targetColumn.getBoundingClientRect();
    
    // if (targetColumn.children.length === 0 || rect.height === 0) {
    //     targetColumn.append(dragItem);
    //     dragItem.style.display = 'grid';
    //     dragItem = null;
    // } else {
    //     if (targetColumn.contains(dragItem)) {
    //         dragItem.style.display = 'grid';
    //         return;
    //     }

    //     const middleY = rect.top + rect.height / 2;
    //     if (event.clientY < middleY) {
    //         targetColumn.insertBefore(dragItem, targetColumn.firstChild);
    //     } else {
    //         targetColumn.append(dragItem);
    //     }

    //     dragItem.style.display = 'grid';
    //     dragItem = null;
    // }

    const targetColumn = this.closest('.column-card');

    event.preventDefault();

    const sibling = Array.from(targetColumn.children).find(child => {
        const rect = child.getBoundingClientRect();
        const middleY = rect.top + rect.height / 2;
        return event.clientY < middleY;
    });

    if (!sibling) {
        targetColumn.appendChild(dragItem);
    } else {
        targetColumn.insertBefore(dragItem, sibling);
    }
    
    dragItem.style.display = 'grid';
    dragItem = null;
}



function isEmpty(column) {
    return column.children.length === 0;
}

export function dragEnter(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    const targetColumn = this.closest('.column-card');
    if (isEmpty(targetColumn)) {
        targetColumn.appendChild(dragItem);
    }
}