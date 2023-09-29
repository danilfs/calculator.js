const resultElement = document.getElementById('result')
const input1 = document.getElementById('firstinput') 
const input2 = document.getElementById('secondinput')
const submit = document.getElementById('submit') 
const minusBtn = document.getElementById('minus')
const plusBtn = document.getElementById('plus')
let action = '+' 

const printResult = (result) => {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

const computeNumbersWithAction = (imp1 , imp2, actionSymbol) => {
    const num1 = Number(imp1.value)
    const num2 = Number(imp2.value)
    // if (actionSymbol == '+') {
    //     return num1 + num2
    // } else {
    //     return num1 - num2
    // }
    return actionSymbol == '+' ? num1 + num2 : num1 - num2
}

minusBtn.onclick = () => {
    action = '-'
}

plusBtn.onclick = () => {
    action = '+'
}

submit.onclick = () => {
    const resultNumber = computeNumbersWithAction (input1 , input2 , action)
    printResult(resultNumber)
    // if (action == '+') {
    // //     if (sum < 0) {
    // //         resultElement.style.color = 'red'
    // //     } else {
    // //         resultElement.style.color = 'green'
    // //     }
    // //     resultElement.textContent = sum
    // // }
    //     const sum = Number(input1.value) + Number(input2.value)
    //     printResult(sum)

    // } else if (action == '-') {
    //     //     if (sum < 0) {
    // //         resultElement.style.color = 'red'
    // //     } else {
    // //         resultElement.style.color = 'green'
    // //     }
    // //     resultElement.textContent = sum
    // // }
    //     const sum = Number(input1.value) - Number(input2.value)
    //     printResult(sum)
    // }
}

const q = 1;

const w = 2;

const e = 3;
