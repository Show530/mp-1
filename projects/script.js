function display(result) {
    document.getElementById("output").innerHTML = String(result);

    // color red
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    }
    // color black
    else {
        document.getElementById("output").style.color = "black";
    }

}


function addition() {
    const firstNumberInput = document.getElementById("first-number").value;
    const secondNumberInput = document.getElementById("second-number").value;

    const firstNumber = Number(firstNumberInput);
    const secondNumber = Number(secondNumberInput);

    const result= firstNumber + secondNumber;

    display(result);
}

function subtraction() {
    const firstNumberInput = document.getElementById("first-number").value;
    const secondNumberInput = document.getElementById("second-number").value;

    const firstNumber = Number(firstNumberInput);
    const secondNumber = Number(secondNumberInput);

    const result = firstNumber - secondNumber;

    display(result);
}

function multiplication() {
    const firstNumberInput = document.getElementById("first-number").value;
    const secondNumberInput = document.getElementById("second-number").value;

    const firstNumber = Number(firstNumberInput);
    const secondNumber = Number(secondNumberInput);

    const result = firstNumber * secondNumber;

    display(result);
}

function division() {
    const firstNumberInput = document.getElementById("first-number").value;
    const secondNumberInput = document.getElementById("second-number").value;

    const firstNumber = Number(firstNumberInput);
    const secondNumber = Number(secondNumberInput);

    const result = firstNumber / secondNumber;

    display(result);
}

function power() {
    const firstNumberInput = document.getElementById("first-number").value;
    const secondNumberInput = document.getElementById("second-number").value;

    const firstNumber = Number(firstNumberInput);
    const secondNumber = Number(secondNumberInput);

    let result = 1;

    for(let i = 1; i <= secondNumber; i++) {
        result *= firstNumber;
        console.log(result);
    }

    display(result);
}

// reset calc - 3 fields
function resetCalc() {


}