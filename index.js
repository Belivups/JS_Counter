
let counter = document.getElementsByClassName('counter')[0]
let btnDark = document.getElementsByClassName('btnDark')[0]
let btnReset = document.getElementsByClassName('btnReset')[0]
let count = 0


function counterPlus() {
    if (count >= 0) {
        count++
        counter.innerHTML = count
        checkbtn()
        checkReset()
    }
}

function counterMinus() {
    
    if (count >= 1) {
        count--
        counter.innerHTML = count
        checkbtn()
        checkReset()
    }
}
        

function counterReset(){
    count = 0
    counter.innerHTML = count
    checkbtn()
    checkReset()
    
}

function checkbtn(){
    if (count == 0) {
        btnDark.classList.add("disabled")
    } else {
        btnDark.classList.remove("disabled")
    }
}
 
function checkReset(){
    if (count == 0) {
        btnReset.classList.add("disabled")
    } else {
        btnReset.classList.remove("disabled")
    }
}

checkbtn()
checkReset()