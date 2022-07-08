

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById('save-el')
let countEL = document.getElementById("count-el")

let count = 0

function increment() {
    count += 1
    countEL.textContent = count
}

// 1. Create a function, save(), which logs out the count when it's called
function save(){
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let countSTR= " "+ count + " - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += countSTR
    // NB: Make sure to not delete the existing content of the paragraph
    countEL.textContent = 0
    count = 0
}
