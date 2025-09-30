let body = document.body
let toggle = document.querySelector ("#toggle")

toggle.addEventListener("click", ()=>{
    if (body.classList.contains("dark")){
        body.classList.remove("dark")
        toggle.textContent = "🌙"
        toggle.style.backgroundColor = "white"
    } else {
        body.classList.add("dark")
        toggle.textContent = "☀️"
        toggle.style.backgroundColor = "black"
    }
})

toggle.style.border = "none"
toggle.style.backgroundColor = "white"