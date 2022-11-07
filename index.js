let counter = document.getElementsByClassName('counter')[0]
let btnDark = document.getElementsByClassName('btnDark')[0]
let btnReset = document.getElementsByClassName('btnReset')[0]
let getAlert = document.getElementsByClassName('getAlert')[0]
let getCount = 0

getCount = localStorage.getItem('count')
counter.innerHTML = getCount

function counterPlus() {
    if (getCount >= 0) {
        getCount++
        localStorage.setItem('count', getCount)
        counter.innerHTML = getCount
        checkbtn()
        checkReset()
        return getCount
    }
    return getCount
}

function counterMinus() {

    if (getCount >= 1) {
        getCount--
        localStorage.setItem('count', getCount)
        counter.innerHTML = getCount
        checkbtn()
        checkReset()
    }
}


function counterReset(){
    getCount = 0
    localStorage.setItem('count', getCount)
    counter.innerHTML = getCount
    getAlert.classList.add('ralert')
    showAlert()
    checkbtn()
    checkReset()


}

function checkbtn(){
    if (getCount == 0) {
        btnDark.classList.add("disabled")
    } else {
        btnDark.classList.remove("disabled")
    }
}

function checkReset(){
    if (getCount == 0) {
        btnReset.classList.add("disabled")
    } else {
        btnReset.classList.remove("disabled")
    }
}

function showAlert(){
    setTimeout(function (){
        getAlert.classList.remove("ralert")
    },1000)
}

checkbtn()
checkReset()



// Counter App JS End