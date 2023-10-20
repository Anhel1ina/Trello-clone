export const getCurrentTime = () => {
        let currentDate = new Date()
        let currentHours = currentDate.getHours()
        let currentMinutes = currentDate.getMinutes()

        let formattedHours = currentHours < 10 ? '0' + currentHours : currentHours
        let formattedMinutes = currentMinutes < 10 ? '0' + currentMinutes : currentMinutes

        let formattedTime = `${formattedHours}:${formattedMinutes}`

        return formattedTime
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
