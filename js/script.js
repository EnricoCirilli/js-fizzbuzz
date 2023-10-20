
//inizializzo con funzione e for loop


/*
function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
        else if (i % 3 === 0) console.log("Fizz");
        else if (i % 5 === 0) console.log("Buzz");
        console.log(i);
    }
}
fizzBuzz(15);
*/
const rowElem = document.querySelector(".row");
console.log("rowElem");

let gridString = "";
for (let i = 1; i <= 100; i++) {
    let result;
    if (i % 3 === 0 && i % 5 === 0){
        result="FizzBuzz";
    } else if (i % 3 === 0){
        result = "Buzz";
    } else if (i % 5 === 0){
        result = "Fizz";
    } else result = ""
    

    gridString += `<div class="square">${i} ${result}</div>`
}

rowElem.innerHTML = gridString;