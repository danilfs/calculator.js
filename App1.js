const resultElement = document.getElementById ('result')
const input1 = document.getElementById('firstinput')
const input2 = document.getElementById('secondinput')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+'
// console.log(resultElement.textContent)
// resultElement.textContent = 42

plusBtn.onclick = function(){
    action = '+'
}

minusBtn.onClick = function(){
    action = '-'
}




submitBtn.onclick = function(){
    if (action == '-') {
    const sum = Number(input1.value) - Number(input2.value)
    resultElement.textContent = sum
    }
    if (action == '+') {
    const sum = Number(input1.value) + Number(input2.value)
    resultElement.textContent = sum
    }
}
