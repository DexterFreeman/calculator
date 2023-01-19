//Calculations 

//operators: 
// %, +, *, -, /


//availble numbers are 0-9

//maybe use an array to store all the numbers + operators?

//    (-1)     1   2  3   4  5  6  7
// like this: [10, +, 24, -, 4, +, 19]
//use .push to add each item and then use a for loop to go through each item
//form the start. 


//need to check if inputs are valid, so check if previous item is a number, 
//then the current has to be an operator and vice versa. 

//can check with typeof()

//simply store the result in a public variable, so that if the user wants
//to do more, push that value to array once calculations are done after pressing
// =.

const calculationsString = "10-9"
//need to go from string to this array
const convertString = (stringToConvert) => {
    let convertedArr = []
    let currentString = ""
    for (let index = 0; index < stringToConvert.length; index++) {
        const element = calculationsString[index];
        if (index == stringToConvert.length-1){
            convertedArr.push(element)
        }
        else if (parseInt(element) || element == "0"){
            currentString = currentString.concat(element)
        }
        else if (element == "."){
            currentString = currentString.concat(element)
    
        }
        else{
            if (currentString){convertedArr.push(currentString)}
            convertedArr.push(element)
            currentString = ""
         } 
    }
    return convertedArr;
}


console.log(convertString(calculationsString));


const calculations = ["10", "-", "9"];

const addition = (firstNumber, secondNumber) => parseInt(firstNumber) + parseInt(secondNumber)
const substration = (firstNumber, secondNumber) => parseInt(firstNumber) - parseInt(secondNumber)
const multiplication = (firstNumber, secondNumber) => parseInt(firstNumber) * parseInt(secondNumber)
const division = (firstNumber, secondNumber) => parseInt(firstNumber) / parseInt(secondNumber)


//Will be called when user presses =
const calculate = (calculateArray) => {
    let totalValue = 0
    let currentOperative = ""

    for (let index = 0; index < calculateArray.length; index++) {
        const currentTask = calculateArray[index];
        console.log("Current Task " + currentTask)
        console.log("Total value " + totalValue)

        switch (currentTask){
            case "+":
                currentOperative = "+"
                break;

            case "*":
                currentOperative = "*"
                break;

            case "-": 
                currentOperative = "-"
                break;

            case "/":
                currentOperative = "/"
                break;

            //OCCURS IF ITS A NUMBER
            default:
                if (totalValue > 0){
                    if (currentOperative == "+"){
                        totalValue = addition(totalValue, currentTask);
                        console.log(totalValue);
                    }

                    else if (currentOperative == "-"){
                        totalValue = substration(totalValue, currentTask);
                        console.log(totalValue);
                    }

                    else if (currentOperative == "*"){
                        totalValue = multiplication(totalValue, currentTask);
                        console.log(totalValue);
                    }

                    else if (currentOperative == "/") {
                        totalValue = division(totalValue, currentTask);
                        console.log(totalValue);
                    } 
                }

                else{
                    totalValue = currentTask; 
                }
        }
    }
    return totalValue;
}



console.log(calculate(calculations));