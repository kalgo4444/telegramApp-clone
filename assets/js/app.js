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

userActiveTimeEl.innerHTML = `Last ${(date.getHours() - 1).toString().padStart(2, "0")}:${(date.getMinutes() - 4).toString().padStart(2, "0")}`

const footerBtnOnclick = function () {
    let userValue = inputEl.value
    if (!userValue.trim()) return null
    const messageDiv = document.createElement("div")
    messageDiv.className = "content__messageBox me"
    messageDiv.innerHTML = userValue
    contentEl.appendChild(messageDiv)
    userActiveTimeEl.innerHTML = "typing..."
    inputEl.value = ""
    setTimeout(() => {
        // userActiveTimeEl.innerHTML = `Last ${(date.getHours()).toString().padStart(2, "0")}:${(date.getMinutes()).toString().padStart(2, "0")}`
        userActiveTimeEl.innerHTML = "Online"
        randomMessageOnclick()
    }, 1500)
}

function randomMessageOnclick() {
    let = value = RANDOMDATA[Math.floor(Math.random() * RANDOMDATA.length)]
    const messageDiv = document.createElement("div")
    messageDiv.className = "content__messageBox"
    messageDiv.innerHTML = value
    contentEl.appendChild(messageDiv)
}
