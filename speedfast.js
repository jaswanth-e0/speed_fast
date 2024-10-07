let userinput = document.getElementById("defuser")
let para = document.getElementById("timer")
let input = userinput.value
let value = ""
let f1 = 0
let k = setInterval(function() {
    let f1 = para.textContent
    let k1 = para.textContent = parseInt(f1) - 1
    if (k1 === 0) {
        para.textContent = "Boom"
        clearInterval(k)
    }
}, 1000)
userinput.addEventListener('keydown', function(event) {
    let i1 = userinput.value
    if (i1 === "defuse" && event.key === "Enter") {
        para.textContent = "you did it"
        clearInterval(k)
    }
})