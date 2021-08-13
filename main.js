const keys = document.querySelector("#keycode")
const event1 = document.querySelector("#eventValue1")
const event2 = document.querySelector("#eventValue2")
const event3 = document.querySelector("#eventValue3")
const event4 = document.querySelector("#eventValue4")


document.addEventListener("keydown" ,(e) =>{
    keys.textContent = `${e.keyCode}`
    event1.textContent = `${e.key}`
    event2.textContent = `${e.location}`
    event3.textContent = `${e.which}`
    event4.textContent = `${e.code}`
})