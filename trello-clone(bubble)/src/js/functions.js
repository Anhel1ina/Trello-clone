export const getCurrentTime = () => {
    const currentDate = new Date();
    const currentHours = String(currentDate.getHours()).padStart(2, '0');
    const currentMinutes = String(currentDate.getMinutes()).padStart(2, '0');
    
    const formattedTime = `${currentHours}:${currentMinutes}`;
    return formattedTime;
}

export const getCurrentDate = () => {
    const currentDate = new Date();
    const { month, day, year } = {
        month: (currentDate.getMonth() + 1).toString().padStart(2, '0'),
        day: currentDate.getDate().toString().padStart(2, '0'),
        year: currentDate.getFullYear().toString().slice(-2)
    };

    const formattedDate = `${month}/${day}/${year}`;
    return formattedDate;
}

export const updateDate = (dateBlock) => {
    setInterval(() => {
        let currentDate = new Date()
        let date = currentDate.toDateString()
        dateBlock.innerText = date
    }, 1000)
}

export const updateTime = (timeBlock) => {
    setInterval(() => {
        timeBlock.innerText = getCurrentTime()
    }, 1000)
}


export const editColumnName = (columnNameField) => {
    columnNameField.classList.remove('highlight-column-name')
    setTimeout(() => {
        columnNameField.classList.add('highlight-column-name')
    }, 10);
}
