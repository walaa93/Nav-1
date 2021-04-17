/*-------------Box Color Modal -------------------*/

// Add Default Local Storage Class on Body 
document.body.classList.add(localStorage.getItem('pageColor') || 'color-1');

let el = document.querySelectorAll(".color-switch li");
let classesList = [];


el.forEach(element => {
    classesList.push(element.getAttribute("data-color"));
    element.addEventListener('click',function(){
        // Remove All Old Classes
        document.body.classList.remove(...classesList)
        // Add Current Class From Li Data Attribute
        document.body.classList.add(this.getAttribute("data-color"));

        // Add Data To Local Storage 
        localStorage.setItem('pageColor',this.getAttribute("data-color"))
        
    },false)
});
console.log(localStorage.getItem('pageColor'))




/*--------------Create Counter------------------------*/

let increaseBtn = document.querySelector('.increse');
let decreaseBtn = document.querySelector('.decrese');
let resetBtn = document.querySelector('.reset');
let publicWindow = document.querySelector('.window');
let count = parseInt(localStorage.getItem('count')) || 0;
let mySpan = document.querySelector('.span-count');


////////////////////////////////////////////////////////////////////


increaseBtn.addEventListener('click', increase);
decreaseBtn.addEventListener('click', decrease);

localStorage.setItem('count', count)
mySpan.textContent = count;

function increase() {
    count += 1
    mySpan.textContent = count;

    localStorage.setItem('count', count)
}

function decrease() {

    if (mySpan.textContent != '0') {
        count -= 1
        mySpan.textContent = count
        localStorage.setItem('count', count)

    }
}

mySpan.textContent = localStorage.getItem('count', count)

/*------------------------- Window Modal ----------------------*/

resetBtn.addEventListener('click', () => {

    publicWindow.style.display = "block";
    var okAnswer = document.querySelector(".yes");
    var noAnswer = document.querySelector(".no");

    okAnswer.onclick = function () {
        count = 0;
        mySpan.textContent = 0;

        publicWindow.style.display = "none";
        localStorage.setItem('count', count)
    }

    noAnswer.onclick = function () {
        mySpan.textContent = count;
        publicWindow.style.display = "none"
    }
})

publicWindow.addEventListener("mouseup", function (e) {
    var box = document.querySelector(".custom-window");
    if (e.target != box) {
        publicWindow.style.display = "none"
    }
})

