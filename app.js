console.log("Hello world")

const operators = document.querySelectorAll(".operator");
const commands = document.querySelectorAll(".command");
const numbers = document.querySelectorAll(".number");
const numberDisplay = document.getElementById("answerDisplay")



const handleOperator = (event) => {
    console.log("OPERATOR" + event.target.innerText)
    numberDisplay.innerText += event.target.innerText    
}

const handleCommand = (event) => {
    console.log("COMMAND" + event.target.innerText)
}

const handleNumber = (event) => {
    console.log("NUMBER" + event.target.innerText)
    numberDisplay.innerText += event.target.innerText
}





operators.forEach(element => {
    element.addEventListener("click", handleOperator)
});
commands.forEach(element => {
    element.addEventListener("click", handleCommand)
});
numbers.forEach(element => {
    element.addEventListener("click", handleNumber)
});