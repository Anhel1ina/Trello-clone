
export const updateDate = (dateBlock) => {
    setInterval(() => {
        let currentDate = new Date()
        let date = currentDate.toDateString()
        dateBlock.innerText = date
    }, 1000)
}

export const updateTime = (timeBlock) => {
    setInterval(() => {
        let currentDate = new Date()
        let time = currentDate.toLocaleTimeString()
        timeBlock.innerText = time
    }, 1000)
}

