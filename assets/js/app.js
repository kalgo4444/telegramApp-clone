const headerTimeEl = document.querySelector(".header__time")
const userActiveTimeEl = document.querySelector(".header__userInfo p:nth-child(2)")
const contentEl = document.querySelector(".content")
const inputEl = document.querySelector(".footer input")
const date = new Date()
const RANDOMDATA = [
    "Hello",
    "Hi",
    "How are you",
    "Code with me!",
    "Phone",
    "Telegram",
    "Front-End",
    "Back-End",
    "DevOps",
    "Software",
    "Azure",
    "Docker",
    "Linux",
    "Codewars",
    "Abdualaziz"
]

//header phone time 
function time() {
    const date = new Date()
    let hour = date.getHours().toString().padStart(2, "0")
    let minute = date.getMinutes().toString().padStart(2, "0")
    let second = date.getSeconds().toString().padStart(2, "0")
    return `${hour}:${minute}:${second}`
}
setInterval(() => {
    headerTimeEl.innerHTML = time()
}, 1000)

//for header user last online time
userActiveTimeEl.innerHTML = `Last ${(date.getHours() - 1).toString().padStart(2, "0")}:${(date.getMinutes() - 4).toString().padStart(2, "0")}`

//for message Time
let messageTimeBox = `${(date.getHours()).toString().padStart(2, "0")}:${(date.getMinutes()).toString().padStart(2, "0")}`

const footerBtnOnclick = function () {
    //input value and create messageBox
    let userValue = inputEl.value
    if (!userValue.trim()) return null
    const messageBox = document.createElement("div")
    messageBox.className = "content__messageBox me"
    contentEl.appendChild(messageBox)

    //user me value
    const messageValue = document.createElement("div")
    messageValue.className = "content__message"
    messageValue.innerHTML = userValue
    const messageTime = document.createElement("div")
    messageBox.appendChild(messageValue)

    //user send message and random message
    messageTime.className = "content__messageTime"
    messageTime.innerHTML = messageTimeBox
    messageBox.appendChild(messageTime)

    //for header user active
    userActiveTimeEl.innerHTML = "typing..."
    inputEl.value = ""

    //for get random message 
    setTimeout(() => {

        userActiveTimeEl.innerHTML = "Online"
        randomMessageOnclick()
    }, 1500)
    timeMessage()
}

//crate random message
function randomMessageOnclick() {
    let = value = RANDOMDATA[Math.floor(Math.random() * RANDOMDATA.length)]
    const messageDiv = document.createElement("div")
    messageDiv.className = "content__messageBox"
    messageDiv.innerHTML = value
    contentEl.appendChild(messageDiv)

    const messageTime = document.createElement("div")
    messageTime.className = "content__messageTime"
    messageTime.innerHTML = messageTimeBox
    messageDiv.appendChild(messageTime)
}
