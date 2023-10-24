export const getCurrentTime = () => {
    let currentDate = new Date()
    let currentHours = currentDate.getHours()
    let currentMinutes = currentDate.getMinutes()

    let formattedHours = currentHours < 10 ? '0' + currentHours : currentHours
    let formattedMinutes = currentMinutes < 10 ? '0' + currentMinutes : currentMinutes

    let formattedTime = `${formattedHours}:${formattedMinutes}`

    return formattedTime
}

export const getCurrentDate = () => {
    let currentDate = new Date()

    let month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
    let day = currentDate.getDate().toString().padStart(2, '0')
    let year = currentDate.getFullYear().toString().slice(-2)

    let formattedDate = `${month}/${day}/${year}`
    return formattedDate
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
