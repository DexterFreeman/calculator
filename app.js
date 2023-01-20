const operators = document.querySelectorAll(".operator");
const commands = document.querySelectorAll(".command");
const numbers = document.querySelectorAll(".number");
const numberDisplay = document.getElementById("answerDisplay")


//Functions for calculations: 
const addition = (firstNumber, secondNumber) => firstNumber+secondNumber
const substration = (firstNumber, secondNumber) => firstNumber-secondNumber
const multiplication = (firstNumber, secondNumber) => firstNumber*secondNumber
const division = (firstNumber, secondNumber) => firstNumber/secondNumber
const percentage = (firstnumber, secondNumber) => (100 * firstnumber) / secondNumber


//Converts string of calculation into a usable array
// "10-9+5" -> [10, "-", 9, +, "5"]
const convertString = (stringToConvert) => {
    let convertedArr = []
    let currentString = ""
    let pushCount = 0;

    for (let index = 0; index < stringToConvert.length; index++) {
        const element = stringToConvert[index];

        //If it is the last item to add then:
        if (index == stringToConvert.length-1){
            //Push any previous item
            convertedArr.push(currentString)
            //If the last item pushed was a number then:
            if (parseInt(convertedArr[pushCount]) || convertedArr[pushCount] == 0){
                //Concat the current element to it e.g in string +22 this will result in the interaction of
                //[+, 2] -> [+, 22]
                convertedArr[pushCount] =convertedArr[pushCount].concat(element)
            }
            else {
                //Otherwise push it if it was an operator. 
                convertedArr.push(element)
            }
        }

        else if (parseInt(element) || element == "0" || element == "."){
            currentString = currentString.concat(element)
        }
        else if (element == "e"){
            currentString = currentString.concat(element)
            currentString = currentString.concat("+")
            index ++; 
        }

        else{
            if (currentString){convertedArr.push(currentString); pushCount++}
            convertedArr.push(element)
            pushCount++
            currentString = ""
         } 
    }
    console.log(convertedArr);
    return convertedArr;
}


//Takes in the array and calculates the final result. 
const calculate = (calculateArray) => {
    let totalValue = 0
    let currentOperative = ""

    for (let index = 0; index < calculateArray.length; index++) {
        let currentTask = calculateArray[index];
        if (currentTask.includes("e")){
            currentTask = new Number(currentTask)
        }
        switch (currentTask){
            case "+":
                currentOperative = "+"
                break;

            case "%":
                currentOperative = "%"
                break;

            case "x":
                currentOperative = "x"
                break;

            case "-": 
                currentOperative = "-"
                break;

            case "/":
                currentOperative = "/"
                break;

            //OCCURS IF ITS A NUMBER
            default:
                if (index > 0){
                    if (currentOperative == "+"){
                        totalValue = addition(parseFloat(totalValue), parseFloat(currentTask));
                    }

                    else if (currentOperative == "-"){
                        totalValue = substration(parseFloat(totalValue), parseFloat(currentTask));
                    }

                    else if (currentOperative == "%"){
                        totalValue = percentage(totalValue, currentTask);
                    }

                    else if (currentOperative == "x"){
                        totalValue = multiplication(parseFloat(totalValue), parseFloat(currentTask));
       
                    }

                    else if (currentOperative == "/") {
                        totalValue = division(parseFloat(totalValue), parseFloat(currentTask));
                    } 
                    else{
                        console.log("This shouldnt happen D:");
                    }

                }

                else{
                    totalValue = currentTask; 
                }
        }
    }
    return totalValue;
}




//Functions for handling user input: 
const handleOperator = (event) => {
    numberDisplay.innerText += event.target.innerText    
}

const handleCommand = (event) => {
    if (event.target.innerText == "Del"){
        if (numberDisplay.innerText.length == 1){
            numberDisplay.innerText = "0"
        }
        else{
            numberDisplay.innerText = numberDisplay.innerText.substring(0, numberDisplay.innerText.length-1)
        }
    }

    else if (event.target.innerText == "C"){
        numberDisplay.innerText = "0"
    }

    else if (event.target.innerText == "="){
        let commandString = convertString(numberDisplay.innerText)
        numberDisplay.innerText = calculate(commandString);
    }
}

const handleNumber = (event) => {
    if (numberDisplay.innerText == "0"){
        numberDisplay.innerText = event.target.innerText
    }
    else{
        numberDisplay.innerText += event.target.innerText
    } 
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