// DOM DOcument Object Model - aka how to use JavaScript to modify a website object


let saveEl = document.getElementById("save-el") //pass in argument
let countEl = document.getElementById("count-el") //pass in argument
let count = 0


function increment() {
    count += 1
    countEl.textContent = count
    // set countEl's innerText to the count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    
}
